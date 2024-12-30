<script lang="ts">
    import { onMount } from 'svelte';

    export let geometry: string | null = null;
    export let transparent = false;
    export let rotate = false;
    export let pan = true;

    let zoomable = false;
    let click_start: number = Date.now();
    let model_container: HTMLElement;
    let in_container = false;

    function mousedown() {
        click_start = Date.now();
    }

    function mouseup() {
        if (zoomable === false) zoomable = true;
        else {
            if (Date.now() - click_start < 200) zoomable = false;
        }
    }

    onMount(async () => {
        await import('./model-viewer/model-viewer.min.js');

        // Hack to set outline border
        if (model_container.parentElement?.classList.contains('container')) {
            in_container = true;
        }

        window.addEventListener('mouseup', function (event) {
            if (event.target != model_container && event.target.parentNode != model_container) {
                zoomable = false;
            }
        });
    });
</script>

<div
    class="model-container"
    class:transparent
    class:zoomable
    class:rounded-border={in_container}
    bind:this={model_container}
    on:mousedown={mousedown}
    on:mouseup={mouseup}
>
    <model-viewer
        src={geometry ? geometry : false}
        disable-zoom={!zoomable || undefined}
        enable-pan={pan || undefined}
        camera-controls={!rotate || undefined}
        auto-rotate={rotate || undefined}
    />
</div>

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
    }

    .model-container.transparent {
        background-color: transparent;
    }

    .model-container.zoomable {
        border-color: var(--color-primary-50);
    }

    :global(.mode-dark) .model-container.zoomable {
        border-color: var(--color-primary-500);
    }

    .model-container.rounded-border {
        border-radius: 0.85rem;
    }
</style>
