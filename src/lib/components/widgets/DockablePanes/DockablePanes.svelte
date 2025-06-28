<!--
 * @file DockablePanes.svelte
 * @author James Bennion-Pedley
 * @brief Bolts-Included Dockable Panes (VSCode-style editor layout)
 * @date 08/05/2025
 *
 * @copyright Copyright (c) 2025
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { type Component } from 'svelte';

    import { PaneGroup, Pane as PaneItem, PaneResizer } from 'paneforge';
    import { droppable, type DragDropState } from '@thisux/sveltednd';

    import Tabs from '$lib/components/ui/tabs/Tabs.svelte';

    /*--------------------------------- Types --------------------------------*/

    interface LayoutNodeLeaf {
        type: 'leaf';
        tabs: string[]; // Reference IDs of panes (TODO make this another datatype)
        proportion: number;
        selected?: number;
        // internal?: {
        //     parent: LayoutNode | null;
        // };
        // maximized?: boolean;
    }

    interface LayoutNodeBranch {
        type: 'branch';
        parent?: LayoutNode | null;
        orientation: 'horizontal' | 'vertical';
        proportion: number;
        children: LayoutNode[];
        // internal?: {
        //     parent: LayoutNode | null;
        // };
    }

    type LayoutNode = LayoutNodeLeaf | LayoutNodeBranch;

    // Data emitted from our drag event
    type DragData = {
        idx: number; // Tab index (defined by tab component)
        context: number[]; // Index of Branch Nesting
    };

    type DragLocation = 'tab' | 'top' | 'bottom' | 'left' | 'right';

    /**
     * Useful Pane Data (accessible via focused prop)
     */
    type PaneHandle = {
        node: LayoutNode;
        tab: number; // Index of current tab
        node_location: number[]; // Reference to node position in tree
    };

    /*--------------------------------- Props --------------------------------*/

    type Pane = {
        id: string; //  Must be unique
        label?: string;
        component?: Component;
    };

    interface DockableTabsProps {
        panes: {
            [key: string]: Pane; // Any panels not in the layout are assigned to the first leaf node
        };
        layout?: LayoutNode;
        focused?: PaneHandle | null;
    }

    let {
        panes = {},
        layout = $bindable({
            type: 'leaf',
            proportion: 1,
            tabs: []
        }),
        focused = $bindable(null)
    }: DockableTabsProps = $props();

    const locations: DragLocation[] = ['top', 'bottom', 'left', 'right'];

    /*-------------------------------- Methods -------------------------------*/

    function handleDrop(
        state: DragDropState<DragData>, // draggedItem contains source info
        target: DragData, // Separately specify target info
        loc: DragLocation
    ) {
        if (!state.targetContainer) return;
        if (!state.draggedItem) return;
        const source: DragData = state.draggedItem;

        console.log('source', source);
        console.log('target', target);
        console.log(loc);

        // Case of moving to another tab (no new windows)
        if (loc === 'tab') {
            let sourceNode = layout; // root node
            let sourceParent = sourceNode; // root node
            source.context.forEach((i) => {
                sourceParent = sourceNode;
                if (sourceNode.type === 'branch') sourceNode = sourceNode.children[i];
            });

            let targetNode = layout; // root node
            target.context.forEach((i) => {
                if (targetNode.type === 'branch') targetNode = targetNode.children[i];
            });

            if (sourceNode.type === 'branch') return; // This should never happen
            if (targetNode.type === 'branch') return; // This should never happen

            // Move tab to new location
            let tab = sourceNode.tabs[source.idx];
            sourceNode.tabs.splice(source.idx, 1);
            targetNode.tabs.splice(target.idx, 0, tab);

            // If only one tab in the source, close the leaf
            if (sourceNode.tabs.length === 0 && sourceParent.type === 'branch')
                sourceParent.children.splice(source.context[-1], 1); // TODO redistribute space?
        }

        // Moving a pane focuses it (TODO)
    }

    // TODO when node is deleted ensure space is distributed to siblings

    // TODO when any panes are removed ensure focused is updated

    /*------------------------------- Lifecycle ------------------------------*/
</script>

{#snippet tab(t: string, id: number[])}
    <div class="tab rounded-sm">
        {t}
        {#each locations as loc}
            <div
                class={`drop-target drop-${loc}`}
                use:droppable={{
                    container: `${t}`,
                    callbacks: {
                        onDrop: (s: DragDropState<DragData>) =>
                            handleDrop(
                                s,
                                {
                                    idx: 0, // New pane is always the first tab,
                                    context: id
                                },
                                loc
                            )
                    }
                }}
            ></div>
        {/each}
    </div>
{/snippet}

{#snippet pane(node: LayoutNode, id: number[])}
    {#if node.type === 'leaf'}
        <PaneItem
            defaultSize={node.proportion * 100}
            class="rounded-sm bg-accent"
            onResize={(s) => {
                node.proportion = s / 100;
            }}
        >
            <Tabs
                tabs={node.tabs}
                class="h-full"
                index={node.selected && node.selected < node.tabs.length ? node.selected : 0}
                onIndexChange={(i) => {
                    node.selected = i;
                    focused = {
                        node: node,
                        tab: i,
                        node_location: id
                    };
                }}
                drag
                dragContext={id}
                onDropEvent={(e) => {
                    handleDrop(
                        e.state as DragDropState<DragData>,
                        {
                            idx: e.target,
                            context: id
                        },
                        'tab'
                    );
                }}
            >
                {#each node.tabs as t}
                    {@render tab(t, id)}
                {/each}
            </Tabs>
        </PaneItem>
    {:else if node.type === 'branch'}
        <PaneItem
            defaultSize={node.proportion * 100}
            onResize={(s) => {
                node.proportion = s / 100;
            }}
        >
            <PaneGroup direction={node.orientation}>
                {#each node.children as n, idx}
                    {@render pane(n, [...id, idx])}
                    {#if idx != node.children.length - 1}
                        <PaneResizer
                            class={`${node.orientation === 'horizontal' ? 'w-1' : 'h-1'} relative flex items-center justify-center bg-background hover:bg-blue-400 active:bg-blue-400`}
                        />
                    {/if}
                {/each}
            </PaneGroup>
        </PaneItem>
    {/if}
{/snippet}

<div class="root">
    <PaneGroup direction="horizontal" class="p-1">
        {@render pane(layout, [])}
    </PaneGroup>
</div>

<style>
    .root {
        width: 100%;
        height: 100%;
    }

    .tab {
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
        text-align: center;

        background-color: rgb(32, 49, 49); /* TEMP */

        position: relative;
    }

    .tab :global(.dragging) {
        @apply opacity-50 shadow-lg ring-2 ring-blue-400;
    }

    .drop-target {
        position: absolute;

        &.drop-top {
            width: 100%;
            height: 40%;
            max-height: 8rem;
            top: 0;
            &:global(.drag-over) {
                border-top: 1rem solid rgb(96 165 250);
            }
        }

        &.drop-bottom {
            width: 100%;
            height: 40%;
            max-height: 8rem;
            bottom: 0;
            &:global(.drag-over) {
                border-bottom: 1rem solid rgb(96 165 250);
            }
        }

        &.drop-left {
            height: 100%;
            width: 40%;
            max-width: 8rem;
            left: 0;
            &:global(.drag-over) {
                border-left: 1rem solid rgb(96 165 250);
            }
        }

        &.drop-right {
            height: 100%;
            width: 40%;
            max-width: 8rem;
            right: 0;
            &:global(.drag-over) {
                border-right: 1rem solid rgb(96 165 250);
            }
        }
    }
</style>
