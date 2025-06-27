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

    import { Widgets } from '$lib';

    import { PersistedState } from 'runed';

    /*--------------------------------- Props --------------------------------*/

    const default_layout = {
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
                tabs: ['test3', 'test4', 'test4.5']
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
    };

    const layout = new PersistedState('panes-layout', default_layout, {
        storage: 'local',
        syncTabs: false
    });

    /*-------------------------------- Methods -------------------------------*/

    let focused: string | null = $state(null);

    /*------------------------------- Lifecycle ------------------------------*/

    // $inspect(layout.current);
    // $inspect(focused);
</script>

<svelte:head>
    <title>Dockable Tabs</title>
</svelte:head>

<svelte:window
    onkeydown={(e) => {
        if (e.key === 's') layout.current = layout.current;
    }}
/>

<div class="make-full">
    <Widgets.DockablePanes panes={{}} bind:layout={layout.current} bind:focused />
</div>

<style>
    .make-full {
        width: 100vw !important;
        position: absolute;
        left: 0 !important;
        bottom: 0 !important;
        height: calc(100% - 3.7rem);
        /* border: 1px red solid; */
    }
</style>
