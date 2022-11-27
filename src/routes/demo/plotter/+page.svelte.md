<script lang=ts>
    import { onMount } from "svelte";

    import { Plotter } from "$lib/widgets";

    let plotter: SvelteComponent;

    // Config
    const xrange = 100;
    const ymin = -50;
    const ymax = 50;
    const numLines = 2;

    onMount(() => {
        let t = 0;
        let freq = 0.05;
        let amp = 25;
        let ofst = 0;
        setInterval(()=>{
            let val = Array.from({length: numLines}, (v, i) => {
                return (amp*Math.sin(2*Math.PI*freq*t + i*2*Math.PI/numLines)) + ofst;
            });
            plotter?.update(val);
            t++;
        }, 50);
    });
</script>

# Plotter

This is a line plotter component, designed for fast real-time plotting.

<Plotter bind:this={plotter} wide numLines={numLines}
    resX={xrange} resY={[ymin, ymax]}/>

Y min = {ymin} , Y max = {ymax}, X range = {xrange} steps.
