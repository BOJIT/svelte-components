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
        // parent?: LayoutNode | null;
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

    function cleanTree(node: LayoutNode) {
        if (node.type === 'leaf') return;

        // If we are a single child branch, remove from tree
        if (node.children.length === 1) {
            console.log('Key Collapse:', layout);
            const child = node.children[0];
            const nodeAny = node as any;
            Object.keys(node).forEach((key) => delete nodeAny[key]);
            Object.assign(node, child);
            console.log('Key Post:', layout);
        }

        // Recursively walk the rest of the tree
        node.children?.forEach((c) => cleanTree(c));
    }

    function handleDrop(
        state: DragDropState<DragData>, // draggedItem contains source info
        target: DragData, // Separately specify target info
        loc: DragLocation
    ) {
        if (!state.targetContainer) return;
        if (!state.draggedItem) return;
        const source: DragData = state.draggedItem;

        // Locate source/target nodes and parents in the tree
        let sourceNode = layout; // root node
        let sourceParent = null as LayoutNode | null;
        source.context.forEach((i) => {
            sourceParent = sourceNode;
            if (sourceNode.type === 'branch') sourceNode = sourceNode.children[i];
        });
        if (sourceNode.type === 'branch') return; // This should never happen

        let targetNode = layout; // root node
        let targetParent = null as LayoutNode | null;
        target.context.forEach((i) => {
            targetParent = targetNode;
            if (targetNode.type === 'branch') targetNode = targetNode.children[i];
        });
        if (targetNode.type === 'branch') return; // This should never happen

        // Splice tab from existing array
        let tab = sourceNode.tabs[source.idx];
        sourceNode.tabs.splice(source.idx, 1);

        if (loc === 'tab') {
            // Move tab to new location
            targetNode.tabs.splice(target.idx, 0, tab);
        } else {
            // Do we create a new branch or append to existing?
            let newBranch = false;
            if (targetParent === null || targetParent.type === 'leaf')
                newBranch = true; // Parent is root
            else {
                if (targetParent.orientation === 'vertical' && (loc === 'left' || loc === 'right'))
                    newBranch = true;
                if (
                    targetParent.orientation === 'horizontal' &&
                    (loc === 'top' || loc === 'bottom')
                )
                    newBranch = true;
            }

            if (newBranch) {
                // Convert leaf to branch (by mutation of reference)
                let original: string[] = targetNode.tabs;
                let targetRedefined: LayoutNodeBranch = targetNode as unknown as LayoutNodeBranch;
                const targetAny = targetNode as any;
                delete targetAny.tabs;
                delete targetAny.selected;
                targetRedefined.type = 'branch';
                if (loc === 'top' || loc === 'bottom') targetRedefined.orientation = 'vertical';
                else targetRedefined.orientation = 'horizontal';
                targetRedefined.children = [
                    { type: 'leaf', proportion: 0.5, tabs: [tab] },
                    {
                        type: 'leaf',
                        proportion: 0.5,
                        tabs: original
                    }
                ];
                if (loc === 'right' || loc === 'bottom') targetRedefined.children.reverse();
            } else {
                // Insert into existing branch
                if (!targetParent || targetParent.type === 'leaf') return; // Should never happen

                let targetIndex = target.context.at(-1);
                if (targetIndex !== undefined) {
                    if (loc === 'right' || loc === 'bottom') targetIndex++;
                    let node: LayoutNodeLeaf = {
                        type: 'leaf',
                        proportion: 0.5, // TODO fix
                        tabs: [tab]
                    };
                    targetParent.children.splice(targetIndex, 0, node);
                }
            }
        }

        // Close off original leaf if empty
        if (
            sourceNode.type === 'leaf' &&
            sourceNode.tabs.length === 0 &&
            sourceParent !== null &&
            sourceParent.type === 'branch'
        ) {
            const idx = source.context.at(-1);
            if (idx !== undefined) sourceParent.children.splice(idx, 1);
        }

        // Tree walk and cleanup:
        cleanTree(layout);
    }

    // TODO when node is deleted ensure space is distributed to siblings

    // TODO when any panes are removed ensure focused is updated

    /*------------------------------- Lifecycle ------------------------------*/

    $inspect(layout);
</script>

{#snippet tab(t: string, id: number[])}
    <div class="tab rounded-sm">
        <p>
            {t}
            <br />
            [{id}]
        </p>
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
