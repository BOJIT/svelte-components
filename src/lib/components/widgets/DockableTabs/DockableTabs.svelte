<!--
 * @file DockableTabs.svelte
 * @author James Bennion-Pedley
 * @brief Bolts-Included Dockable Tabs Demo
 * @date 08/05/2025
 *
 * @copyright Copyright (c) 2025
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { PaneGroup, Pane, PaneResizer } from 'paneforge';

    /*--------------------------------- Props --------------------------------*/

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<PaneGroup direction="horizontal">
    <Pane defaultSize={50} class="rounded-sm bg-accent">Pane 1</Pane>
    <PaneResizer
        class="relative flex w-1 items-center justify-center bg-background hover:bg-blue-400 active:bg-blue-400"
    />
    <Pane defaultSize={50} class="rounded-sm bg-accent">Pane 2</Pane>
</PaneGroup>

<style>
</style>
