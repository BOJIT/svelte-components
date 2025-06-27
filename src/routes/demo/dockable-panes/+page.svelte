<!--
 * @file +page.svelte
 * @author James Bennion-Pedley
 * @brief Example Page
 * @date 27/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { utils, UI, Widgets } from '$lib';

    /*--------------------------------- Props --------------------------------*/

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<svelte:head>
    <title>Dockable Tabs</title>
</svelte:head>

<div class="make-full">
    <Widgets.DockablePanes
        panes={{}}
        layout={{
            type: 'branch',
            orientation: 'horizontal',
            // orientation: 'vertical',
            proportion: 1,
            children: [
                {
                    type: 'leaf',
                    proportion: 0.5,
                    tabs: ['test1', 'test2']
                },
                {
                    type: 'leaf',
                    proportion: 0.2,
                    tabs: ['test3', 'test4']
                },
                {
                    type: 'branch',
                    proportion: 0.5,
                    orientation: 'vertical',
                    children: [
                        {
                            type: 'leaf',
                            proportion: 0.5,
                            tabs: ['test5', 'test6']
                        },
                        {
                            type: 'leaf',
                            proportion: 0.5,
                            tabs: ['test7', 'test8']
                        }
                    ]
                }
            ]
        }}
    />
</div>

<style>
    .make-full {
        width: 100vw !important;
        position: absolute;
        left: 0 !important;
        bottom: 0 !important;
        height: calc(100% - 3.7rem);
        border: 1px red solid;
    }
</style>
