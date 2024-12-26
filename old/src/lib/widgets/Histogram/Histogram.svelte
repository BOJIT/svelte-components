<!--
 * @file Histogram.svelte
 * @author James Bennion-Pedley
 * @brief Plot Fixed Position Histogram
 * @date 28/11/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang='ts'>
    import { onDestroy, onMount } from "svelte";
    import { Container } from "$lib/layout";
    import theme from "$lib/theme";

    import IconPause from "@svicons/ionicons-outline/pause.svelte";
    import IconPlay from "@svicons/ionicons-outline/play.svelte";
    import IconRefresh from "@svicons/ionicons-outline/refresh.svelte";

    /*------------------------------ Public API ------------------------------*/

    // Feed-through Container Props
    export let aspect: string | undefined;
    export let wide: boolean = false;

    // Histogram Props
    export let demo: boolean = false;
    export let numBars = 5;
    export let resY: [number, number] = [0, 100];

    export function update(vals: number[]) {
        if(pause)
            return;

        if(vals.length !== numBars) {
            console.warn("Data Length Mismatch");
            return;
        }

        for(let i = 0; i < numBars; i++) {
            labels[i] = vals[i].toFixed(2);
            let h = vals[i];
            let p = Math.abs(resY[0] + h)/(resY[1] - resY[0])*100;

            if(p < 0)
                p = 0;
            else if(p > 100)
                p = 100;
            bars[i] = p;
        }
    }

    export function clear() {
        for(let i = 0; i < numBars; i++) {
            bars[i] = 0;
            labels[i] = undefined;
        }
    }

    /*--------------------------------- State --------------------------------*/

    let bars: number[] = [];
    let labels: string[] | undefined = [];

    let pause: boolean = false;

    let demoInterval: any;
    let demoCount: number = 0;

    $: if(demo) {
        demoInterval = setInterval(demoSignals, 10);
    } else {
        if(demoInterval)
            clearInterval(demoInterval);
            clear();
    }

    /*-------------------------------- Helpers -------------------------------*/

    function demoSignals() {
        if(pause)
            return;

        const freq = 0.1;
        const phaseStep = 2 * Math.PI /numBars;

        let i = demoCount/100; // 10ms Update rate
        let vals: number[] = [];

        for(let l = 0; l < numBars; l++) {
            vals[l] = (resY[1] - resY[0])/2 * Math.sin(Math.PI * i * freq * Math.PI * 2 + l*phaseStep) + (resY[1] + resY[0])/2;
        }
        update(vals);

        demoCount++;
    }

    /*--------------------------- Lifecycle Hooks ----------------------------*/

    onMount(async () => {
        // Create Histogram Bars
        for(let i = 0; i < numBars; i++) {
            bars[i] = 0;
        }
    });

    onDestroy(() => {
        if(demoInterval)
            clearInterval(demoInterval);
    });
</script>


<Container bind:aspect={aspect} wide={wide} tray={[
    {
        icon: pause ? IconPlay: IconPause,
        callback: () => {
            if(pause)
                clear();
            pause = !pause;
        },
    },
    {
        icon: IconRefresh,
        callback: clear,
    },
]}>
    <div class="zone">
        {#each bars as b, idx}
            <div class="bar">
                <div class="bar-fill" style={`height: ${b}%; ${theme.swatchColor(idx)}`}>
                    <p>{labels[idx] !== undefined ? labels[idx] : ""}</p>
                </div>
            </div>
        {/each}
    </div>
</Container>


<style>
    .zone {
        padding: 5rem 2rem 5rem 2rem;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

    .bar {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
    }

    .bar-fill {
        width: 100%;
        background-color: var(--color-swatch-base-light);
        /* overflow: hidden; */
        display: flex;
        justify-content: center;
    }

    .bar-fill > p {
        padding-top: 0.5rem;
        writing-mode: vertical-lr;
    }

    :global(.mode-dark) .bar-fill {
        background-color: var(--color-swatch-base-dark);
    }
</style>
