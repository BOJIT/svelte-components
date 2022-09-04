<script lang="ts">
    import { getContext, onDestroy, onMount } from "svelte";
    import type { Point, CanvasContext } from "./types";

    export let start: Point;
    export let end: Point;

    let canvasContext = getContext("canvas") as CanvasContext;

    onMount(() => {
      canvasContext.addDrawFn(draw);
    });

    onDestroy(() => {
      canvasContext.removeDrawFn(draw);
    });

    function draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.moveTo(...start);
      ctx.lineTo(...end);
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
    }
</script>
