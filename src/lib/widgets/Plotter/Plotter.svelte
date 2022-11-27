<!--
 * @file Plotter.svelte
 * @author James Bennion-Pedley
 * @brief Real-time line plotter using webgl-plot
 * @date 27/11/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang='ts'>
    import { Container } from "$lib/layout";
    import { onMount } from "svelte";
    import { WebglPlot, WebglLine, ColorRGBA } from "webgl-plot";

    import IconPause from "@svicons/ionicons-outline/pause.svelte";
    import IconPlay from "@svicons/ionicons-outline/play.svelte";
    import IconRefresh from "@svicons/ionicons-outline/refresh.svelte";

    // Feed-through Container Props
    export let aspect: string | undefined;
    export let wide: boolean;

    // Plotter Props
    export let resX: number = 100;
    export let resY: number = 50;

    export let rangeY: [number, number] = [0, 1024];

    // export function update(points: number[]) {
    //     console.log("Updating");
    // }

    export function clear() {
        console.log("Updating");
    }

    /*------------------------------------------------------------------------*/

    let pause: boolean = false;

    function RedrawCanvas() {
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;

        const numX = canvas.width;
        const color = new ColorRGBA(Math.random(), Math.random(), Math.random(), 1);
        wglp = new WebglPlot(canvas);

        // Add grid lines
        line = new WebglLine(color, numX);
        line.arrangeX();
        wglp.addLine(line);
    }

    let canvas: HTMLCanvasElement;
    let wglp: WebglPlot;

    let line: WebglLine;    //temp

    function update() {
        if(pause)
            return;

        const freq = 0.001;
        const amp = 0.5;
        const noise = 0.1;

        for (let i = 0; i < line.numPoints; i++) {
            const ySin = Math.sin(Math.PI * i * freq * Math.PI * 2);
            const yNoise = Math.random() - 0.5;
            line.setY(i, ySin * amp + yNoise * noise);
        }
    }

    onMount(() => {
        RedrawCanvas();

        function newFrame() {
            update();
            wglp.update();
            requestAnimationFrame(newFrame);
        }
        requestAnimationFrame(newFrame);
    });
</script>


<Container aspect={aspect} wide={wide} tray={[
    {
        icon: pause ? IconPlay: IconPause,
        callback: () => { pause = !pause; },
    },
    {
        icon: IconRefresh,
        callback: () => {},
    },
]}>
    <canvas bind:this={canvas} />
</Container>


<style>

</style>
