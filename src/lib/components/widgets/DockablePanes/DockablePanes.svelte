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

    import type { Component } from 'svelte';

    import { PaneGroup, Pane as PaneItem, PaneResizer } from 'paneforge';

    import Tabs from '$lib/components/ui/tabs/Tabs.svelte';

    /*--------------------------------- Types --------------------------------*/

    interface LayoutNodeLeaf {
        type: 'leaf';
        tabs: string[]; // Reference IDs of panes
        proportion: number;
        selected?: number;
        // visible?: boolean;
        // maximized?: boolean;
    }

    interface LayoutNodeBranch {
        type: 'branch';
        orientation: 'horizontal' | 'vertical';
        proportion: number;
        children: LayoutNode[];
        // visible?: boolean;
    }

    type LayoutNode = LayoutNodeLeaf | LayoutNodeBranch;

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
        focused?: string | null;
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

    /*-------------------------------- Methods -------------------------------*/

    // TODO when node is deleted ensure space is distributed to siblings

    // TODO when any panes are removed ensure focused is updated

    /*------------------------------- Lifecycle ------------------------------*/
</script>

{#snippet tab(t: string)}
    <div class="tab pane-styling rounded-sm">{t}</div>
{/snippet}

{#snippet pane(node: LayoutNode)}
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
                    focused = node.tabs[i]; // TODO change to pane interface
                }}
            >
                {#each node.tabs as t}
                    {@render tab(t)}
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
                    {@render pane(n)}
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
        {@render pane(layout)}
    </PaneGroup>
</div>

<style>
    .root {
        width: 100%;
        height: 100%;
    }

    .pane-styling {
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
        text-align: center;

        background-color: rgb(32, 49, 49); /* TEMP */
    }
</style>
