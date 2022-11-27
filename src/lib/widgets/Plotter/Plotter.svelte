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
    import { onDestroy, onMount } from "svelte";

    import { WebglPlot, WebglLine, ColorRGBA } from "webgl-plot";

    import theme from "$lib/theme";

    import IconPause from "@svicons/ionicons-outline/pause.svelte";
    import IconPlay from "@svicons/ionicons-outline/play.svelte";
    import IconRefresh from "@svicons/ionicons-outline/refresh.svelte";

    /*------------------------------ Public API ------------------------------*/

    // Test mode: for demo purposes
    export let demo: boolean = false;

    // Feed-through Container Props
    export let aspect: string | undefined;
    export let wide: boolean;

    // Plotter Props
    export let resX: number = 100;
    export let resY: number = 50;

    export let rangeY: [number, number] = [0, 1024];

    export let numLines: number = 1;

    export function update(points: number[]) {
        console.log("Updating");
    }

    export function clear() {
        console.log("Clearing");
    }

    /*--------------------------------- State --------------------------------*/

    let canvas: HTMLCanvasElement;
    let pause: boolean = false;
    let resizeObserver: ResizeObserver | null = null;
    let wglp: WebglPlot | null = null;

    let lines: WebglLine[] = [];

    /*---------------------------- Helper Functions --------------------------*/

    function drawCanvas() {
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;
        wglp = new WebglPlot(canvas);

        // Add grid lines
        const AxisX = new WebglLine(new ColorRGBA(255, 255, 255, 255), resX);
        AxisX.arrangeX();
        AxisX.constY(0);
        wglp.addLine(AxisX);

        // const AxisY = new WebglLine(new ColorRGBA(255, 255, 255, 255), resX);
        // // AxisY.arrangeY();
        // wglp.addLine(AxisY);

        lines.forEach((l) => {
            wglp?.addLine(l);
        })
    }

    function createLines() {
        for (let i = 0; i < numLines; i++) {
            const swatch = theme.swatchColorJS(i);

            let p = 1;
            const colour = new ColorRGBA(swatch[p][0]/255, swatch[p][1]/255, swatch[p][2]/255, 1);

            lines[i] = new WebglLine(colour, resX);
            lines[i].arrangeX();
        }
    }

    function demoSignals() {
        if(pause)
            return;

        const freq = 0.005;
        const amp = 0.5;
        const noise = 0.1;
        const phaseStep = 2 * Math.PI /numLines;

        for(let l = 0; l < numLines; l++) {
            for (let i = 0; i < lines[l].numPoints; i++) {
                const ySin = Math.sin(Math.PI * i * freq * Math.PI * 2 + l*phaseStep);
                const yNoise = Math.random() - 0.5;
                lines[l].setY(i, ySin * amp + yNoise * noise);
            }
        }
    }

    /*---------------------------- Lifecycle Hooks ---------------------------*/

    onMount(() => {
        createLines();
        drawCanvas();

        // Redraw on size change
        resizeObserver = new ResizeObserver(function(entries) {
            drawCanvas();
        });
        resizeObserver.observe(canvas);

        // Register new frame callback
        function newFrame() {
            if(demo)
                demoSignals();

            wglp?.update();
            requestAnimationFrame(newFrame);
        }
        requestAnimationFrame(newFrame);
    });

    onDestroy(() => {
        resizeObserver?.unobserve(canvas);
    });
</script>


<Container bind:aspect={aspect} wide={wide} tray={[
    {
        icon: pause ? IconPlay: IconPause,
        callback: () => { pause = !pause; },
    },
    {
        icon: IconRefresh,
        callback: () => {},
    },
]}>
    <canvas bind:this={canvas}/>
</Container>


<style>

</style>
