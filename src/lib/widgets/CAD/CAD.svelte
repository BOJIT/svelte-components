<script lang="ts">
    /* You may need to add the following to your SvelteKit config:
        vite: {
            assetsInclude: ['**[backslash]*.gltf', '**[backslash]*.glb'],
        },
    */
    import { onMount } from 'svelte';

    // import("focus-visible/dist/focus-visible.min.js");   // Polyfill

    export let geometry: string | null = null;
    export let transparent = false;
    export let aspect: string = "4:3";
    export let rotate = false;
    export let pan = true;

    let padding = "0%";

    $: {
        let ratio = parseInt(aspect.split(':')[0]) / parseInt(aspect.split(':')[1]);
        padding = (100 / ratio).toString().concat("%");
    }

    let zoomable = false;
    let click_start: number = Date.now();
    let model_container: HTMLElement;

    function mousedown() {
        click_start = Date.now();
    }

    function mouseup() {
        if(zoomable === false)
            zoomable = true;
        else {
            if((Date.now() - click_start) < 200)
                zoomable = false;
        }
    }

    onMount(async () => {
        await import('./model-viewer/model-viewer.min.js');

        window.addEventListener('mouseup', function(event) {
        if (event.target != model_container && event.target.parentNode != model_container) {
            zoomable = false;
        }
    });
    });
</script>


<div class="content-padded">
    <div class="model-container" class:transparent class:zoomable style:padding-bottom={padding}
                bind:this={model_container} on:mousedown={mousedown} on:mouseup={mouseup}>
        <model-viewer src={geometry ? geometry : false}
            disable-zoom={!zoomable || undefined} enable-pan={pan || undefined}
            camera-controls={!rotate || undefined} auto-rotate={rotate || undefined}/>
    </div>
</div>


<style>
    model-viewer {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0; bottom: 0; left: 0; right: 0;
    }

    :global(:root) {
        --poster-color: transparent;
    }

    .model-container {
        width: 100%;
        position: relative;

        background-color: #f5f2f0;

        transition:border-color .2s ease-in;
        -moz-transition:border-color .2s ease-in;
        -o-transition:border-color .2s ease-in;
        -webkit-transition:border-color .2s ease-in;
        border-width: 0.1em;
        border-color: transparent;
    }

    :global(.mode-dark) .model-container {
        background-color: #2d2d2d;
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
</style>

