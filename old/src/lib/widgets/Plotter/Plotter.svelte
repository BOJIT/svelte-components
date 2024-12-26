<!--
 * @file Plotter.svelte
 * @author James Bennion-Pedley
 * @brief Real-time line plotter using webgl-plot
 * @date 27/11/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang="ts">
    import { Container } from '$lib/layout';
    import { onDestroy, onMount } from 'svelte';

    import { WebglPlot, WebglLine, ColorRGBA } from 'webgl-plot';

    import theme from '$lib/theme';

    import IconPause from '@svicons/ionicons-outline/pause.svelte';
    import IconPlay from '@svicons/ionicons-outline/play.svelte';
    import IconRefresh from '@svicons/ionicons-outline/refresh.svelte';

    /*------------------------------ Public API ------------------------------*/

    // Test mode: for demo purposes
    export let demo: boolean = false;

    // Feed-through Container Props
    export let aspect: string | undefined;
    export let wide: boolean;

    // Plotter Props
    export let resX: number = 100;
    export let resY: [number, number] = [-1, 1];

    export let numLines: number = 1;

    export function update(points: number[]) {
        if (pause) return;

        if (demo) return;

        if (points.length !== numLines) {
            console.warn('Data Length Mismatch');
            return;
        }

        const sf = (2 * fullRange) / (resY[1] - resY[0]);
        let rangeProportion = Math.abs(resY[0]) / (resY[1] - resY[0]);
        let ofst = -fullRange + 2 * fullRange * rangeProportion;

        if (resY[0] < 0 && resY[1] > 0) {
        } else {
            ofst = -fullRange - resY[0] * sf;
        }

        for (let i = 0; i < numLines; i++) {
            const fl = new Float32Array(1);
            fl[0] = points[i] * sf + ofst;
            lines[i].shiftAdd(fl);
        }
    }

    export function clear() {
        wglp?.clear();
        createLines();
        drawCanvas();
    }

    /*--------------------------------- State --------------------------------*/

    let canvas: HTMLCanvasElement;
    let pause: boolean = false;
    let resizeObserver: ResizeObserver | null = null;
    let wglp: WebglPlot | null = null;

    let lines: WebglLine[] = [];
    let colours: string[] = [];

    const fullRange = 0.9;

    /*---------------------------- Helper Functions --------------------------*/

    function getYAxisPosition() {
        if (resY[0] < 0 && resY[1] > 0) {
            let rangeProportion = Math.abs(resY[0]) / (resY[1] - resY[0]);
            return -fullRange + 2 * fullRange * rangeProportion;
        } else {
            return -fullRange;
        }
    }

    function drawCanvas() {
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;
        wglp = new WebglPlot(canvas);

        // Add grid lines
        const AxisX = new WebglLine(new ColorRGBA(255, 255, 255, 255), resX);
        AxisX.arrangeX();
        AxisX.constY(getYAxisPosition());
        wglp.addAuxLine(AxisX);

        const AxisY = new WebglLine(new ColorRGBA(255, 255, 255, 255), resX);
        for (let i = 0; i < resX; i++) {
            const n = -fullRange + (2 * fullRange * i) / resX;
            AxisY.setX(i, -1);
            AxisY.setY(i, n);
        }
        wglp.addAuxLine(AxisY);

        lines.forEach((l) => {
            wglp?.addLine(l);
        });
    }

    function createLines() {
        for (let i = 0; i < numLines; i++) {
            const swatch = theme.swatchColorJS(i);

            let p = 1;
            const colour = new ColorRGBA(
                swatch[p][0] / 255,
                swatch[p][1] / 255,
                swatch[p][2] / 255,
                1
            );

            colours[i] = `rgb(${swatch[p][0]}, ${swatch[p][1]}, ${swatch[p][2]})`;
            lines[i] = new WebglLine(colour, resX);
            lines[i].arrangeX();
            lines[i].constY(getYAxisPosition());
        }

        // Truncate arrays if line number is reduced
        lines.length = numLines;
        colours.length = numLines;
    }

    function demoSignals() {
        if (pause) return;

        const freq = 0.005;
        const amp = 0.7;
        const noise = 0.1;
        const phaseStep = (2 * Math.PI) / numLines;

        for (let l = 0; l < numLines; l++) {
            for (let i = 0; i < lines[l].numPoints; i++) {
                const ySin = Math.sin(Math.PI * i * freq * Math.PI * 2 + l * phaseStep);
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
        resizeObserver = new ResizeObserver(function (entries) {
            drawCanvas();
        });
        resizeObserver.observe(canvas);

        // Register new frame callback
        function newFrame() {
            if (demo) demoSignals();

            wglp?.update();
            requestAnimationFrame(newFrame);
        }
        requestAnimationFrame(newFrame);
    });

    onDestroy(() => {
        resizeObserver?.unobserve(canvas);
    });
</script>

<Container
    bind:aspect
    {wide}
    tray={[
        {
            icon: pause ? IconPlay : IconPause,
            callback: () => {
                if (pause) clear();
                pause = !pause;
            }
        },
        {
            icon: IconRefresh,
            callback: clear
        }
    ]}
>
    <canvas bind:this={canvas} />
    <div slot="overlay" class="legend">
        <div class="legend-flex">
            {#each colours as c}
                <div class="legend-square" style="background-color: {c};" />
            {/each}
        </div>
    </div>
</Container>

<style>
    canvas {
        margin: 0.5%;
    }

    .legend {
        position: relative;
    }

    .legend-flex {
        position: absolute;
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
        bottom: 0.6rem;
        right: 0.6rem;
    }

    .legend-square {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 0.2rem;
        background-color: red;
    }
</style>
