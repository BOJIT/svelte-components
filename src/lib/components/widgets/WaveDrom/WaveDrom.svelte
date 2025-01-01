<!--
 * @file WaveDrom.svelte
 * @author James Bennion-Pedley
 * @brief Wavedrom Timing Diagrams Helper
 * @date 01/01/2025
 *
 * @copyright Copyright (c) 2025
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import wv from 'wavedrom';
    import wvDark from 'wavedrom/skins/dark';

    import { mode } from 'mode-watcher';

    /*--------------------------------- Props --------------------------------*/

    interface WaveDromProps {
        json: any;
        ref?: HTMLElement | null;
    }

    let { json, ref = $bindable(null) }: WaveDromProps = $props();

    // Sane customisations
    wv.waveSkin.light = structuredClone(wv.waveSkin.default);
    wv.waveSkin.dark = structuredClone(wvDark.dark);
    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/

    $effect(() => {
        if (ref) wv.renderWaveElement(0, json, ref, wv.waveSkin, false);
        const rects = ref?.querySelectorAll('rect');
        rects?.forEach((r) => {
            if (r.style.fill) r.style.cssText = 'stroke:none;fill:transparent';
        });
    });

    $effect(() => {
        wv.waveSkin.default = $mode === 'dark' ? wv.waveSkin.dark : wv.waveSkin.light;
        if (ref) wv.renderWaveElement(0, json, ref, wv.waveSkin, false);
        const rects = ref?.querySelectorAll('rect');
        rects?.forEach((r) => {
            if (r.style.fill) r.style.cssText = 'stroke:none;fill:transparent';
        });
    });
</script>

<div class="root-el" bind:this={ref}></div>

<style>
    .root-el {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        display: grid;
        place-items: center;
        padding: 1.5rem;
    }

    .root-el :global(rect) {
        fill: transparent;
    }
</style>
