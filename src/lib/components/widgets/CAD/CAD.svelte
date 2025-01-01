<!--
 * @file CAD.svelte
 * @author James Bennion-Pedley
 * @brief CAD wrapper for model-viewer.dev. Works nicely in Container slot
 * @date 01/01/2025
 *
 * @copyright Copyright (c) 2025
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { onMount } from 'svelte';

    /*--------------------------------- Props --------------------------------*/

    interface CADProps {
        geometry?: string;
        ref?: HTMLElement | null;
        transparent?: boolean;
        rotate?: boolean;
        pan?: boolean;
    }

    let {
        geometry,
        ref = $bindable(null),
        transparent = false,
        rotate = false,
        pan = true
    }: CADProps = $props();

    let zoomable = $state(false);
    let click_start: number = Date.now();

    /*-------------------------------- Methods -------------------------------*/

    function mousedown() {
        click_start = Date.now();
    }

    function mouseup() {
        if (zoomable === false) zoomable = true;
        else {
            if (Date.now() - click_start < 200) zoomable = false;
        }
    }

    /*------------------------------- Lifecycle ------------------------------*/

    onMount(async () => {
        await import('./model-viewer/model-viewer.min.js');

        window.addEventListener('mouseup', function (event) {
            if (!(event.target instanceof Element)) return;
            if (event.target != ref && event.target.parentNode != ref) zoomable = false;
        });
    });
</script>

<button
    aria-label="model-viewer"
    bind:this={ref}
    class="model-container"
    class:transparent
    class:zoomable
    onmousedown={mousedown}
    onmouseup={mouseup}
>
    <model-viewer
        src={geometry ? geometry : false}
        disable-zoom={!zoomable || undefined}
        enable-pan={pan || undefined}
        camera-controls={!rotate || undefined}
        auto-rotate={rotate || undefined}
    ></model-viewer>
</button>

<style>
    model-viewer {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    :global(:root) {
        --poster-color: transparent;
    }

    .model-container {
        position: relative;
        width: 100%;
        height: 100%;

        transition: border-color 0.2s ease-in;
        -moz-transition: border-color 0.2s ease-in;
        -o-transition: border-color 0.2s ease-in;
        -webkit-transition: border-color 0.2s ease-in;
        border-width: 0.1em;
        border-color: transparent;
        border-radius: inherit;
    }

    .model-container.transparent {
        background-color: transparent;
    }

    .model-container.zoomable {
        border-color: hsl(var(--primary));
    }
</style>
