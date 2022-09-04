<!--
 * @file ZoomCanvas.svelte
 * @author James Bennion-Pedley
 * @brief Svelte Wrapper for Imperative Canvas API
 * @date 04/09/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang="ts">
    import { onMount, setContext } from "svelte";
    import type { DrawFn } from "./types";

    /* Aspect Ratio + Filling */
    export let aspect = "fill";

    let padding = "0%";

    $: {
        if(aspect === "fill") {
            padding = "0%";
        } else {
            let ratio = parseInt(aspect.split(':')[0]) / parseInt(aspect.split(':')[1]);
            padding = (100 / ratio).toString().concat("%");
        }
    }

    /* Rendering */
    let canvasElement: HTMLCanvasElement;
    let fnsToDraw = [] as DrawFn[];

    setContext("canvas", {
        addDrawFn: (fn: DrawFn) => {fn
            fnsToDraw.push(fn);
        },
        removeDrawFn: (fn: DrawFn) => {
            let index = fnsToDraw.indexOf(fn);
            if (index > -1){
            fnsToDraw.splice(index, 1);
            }
        },
    });

    onMount(() => {
        // get canvas context
        let ctx = canvasElement.getContext("2d");
        draw(ctx, canvasElement);

        window.addEventListener('resize', (e) => {
            draw(ctx, canvasElement);
        });
    });

    function draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        // Set canvas size based on rendered CSS
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvasElement.width = canvasElement.offsetWidth;
        canvasElement.height = canvasElement.offsetHeight;

        /* Render background */

        /* Draw children */
        fnsToDraw.forEach(draw => draw(ctx));
    }
</script>

<div class="container" class:fill={aspect === "fill"} style:padding-bottom={padding}>
    <canvas bind:this={canvasElement}>
        <h4>Canvas element not supported in your browser!</h4>
    </canvas>
    <slot />
</div>


<style>
    .container {
        position: relative;
        width: 100%;

        background-color: #2d2d2d;
    }

    canvas {
        position: absolute;
        width: 100%;
        height: 100%;

        background-color: transparent;
    }

    .fill {
        height: 100%;
    }
</style>
