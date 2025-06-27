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
        tabs: string[];
        proportion: number;
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
        // onitemclick?: (label: string, key?: string) => void;
    }

    let {
        panes = {},
        layout = $bindable({
            type: 'leaf',
            proportion: 1,
            tabs: []
        })
    }: DockableTabsProps = $props();

    /*-------------------------------- Methods -------------------------------*/

    // TODO when node is deleted ensure space is distributed to siblings

    /*------------------------------- Lifecycle ------------------------------*/
</script>

{#snippet pane(node: LayoutNode)}
    {#if node.type === 'leaf'}
        <PaneItem defaultSize={node.proportion * 100} class="pane-internal rounded-sm bg-accent"
            >Pane</PaneItem
        >
    {:else if node.type === 'branch'}
        <PaneItem defaultSize={node.proportion * 100} class="pane-internal rounded-sm bg-accent">
            <PaneGroup direction={node.orientation} class="p-1">
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

    .root :global(.pane-internal) {
        display: grid;
        align-items: center;
        text-align: center;
    }
</style>
