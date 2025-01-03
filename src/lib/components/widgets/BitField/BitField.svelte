<!--
 * @file BitField.svelte
 * @author James Bennion-Pedley
 * @brief BitField Diagrams Helper
 * @date 01/01/2025
 *
 * @copyright Copyright (c) 2025
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import bf from 'bit-field';
    import onml from 'onml';

    import { mode } from 'mode-watcher';

    /*--------------------------------- Props --------------------------------*/

    interface WaveDromProps {
        json: any;
        options?: any;
        ref?: HTMLElement | null;
    }

    let { json, options = {}, ref = $bindable(null) }: WaveDromProps = $props();

    let markup: string = $state('');

    const regex1 = /width=\"([^']*?)\"/g;
    const regex2 = /height=\"([^']*?)\"/g;

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/

    $effect(() => {
        const rawMarkup = onml
            .stringify(bf.render(json, options))
            .replaceAll('stroke="black"', `stroke="${$mode === 'dark' ? 'white' : 'black'}"`);

        // Hack to remove the SVG native width and height from markup
        const w = rawMarkup.match(regex1);
        const h = rawMarkup.match(regex2);
        if (w && h) markup = rawMarkup.replace(w[0], '').replace(h[0], '');
    });
</script>

<div class="root-el" bind:this={ref}>
    {@html markup}
</div>

<style>
    .root-el {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        display: grid;
        place-items: center;
        padding: 2.5rem;
    }

    @media (max-width: 768px) {
        .root-el {
            padding: 1.5rem;
        }
    }

    .root-el > :global(svg) {
        width: 100%;
    }
</style>
