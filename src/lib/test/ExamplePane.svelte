<!--
 * @file ExamplePane.svelte
 * @author James Bennion-Pedley
 * @brief Demo component for Dockable Panes component
 * @date 29/06/2025
 *
 * @copyright Copyright (c) 2025
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { cn } from '$lib/utils';

    /*--------------------------------- Props --------------------------------*/

    let { text = 'World', class: className } = $props();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<div class={cn('h-full w-full', className)}>
    <p>Hello {text}</p>
</div>

<style>
    div {
        display: grid;
        align-items: center;
        text-align: center;
    }
</style>
