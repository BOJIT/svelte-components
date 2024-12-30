<!--
 * @file YouTube.svelte
 * @author James Bennion-Pedley
 * @brief Wrapper for embedding YouTube videos with a fixed aspect
 * @date 27/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { cn } from '$lib/utils';

    /*--------------------------------- Types --------------------------------*/

    interface YouTubeProps {
        src: string;
        ref?: HTMLElement | null;
        autoplay?: boolean;
        playlist?: string;
        class?: string;
    }

    /*--------------------------------- Props --------------------------------*/

    let {
        src,
        ref = $bindable(null),
        autoplay = false,
        playlist = '',
        class: className
    }: YouTubeProps = $props();

    const url = $derived([
        src,
        '?version=3',
        '&modestbranding=1',
        autoplay ? '&autoplay=1&loop=1&controls=0&mute=1' : '',
        playlist !== '' ? `&playlist=${playlist}` : ''
    ]);
</script>

<div class={cn('root-el', className)} bind:this={ref}>
    <div class="aspect-ratio">
        <iframe title="youtube-video" src={url.join('')} frameborder="0"></iframe>
    </div>
</div>

<style>
    .root-el {
        width: 80%;
        margin: 0 auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        .root-el {
            width: 100%;
        }
    }

    /* Containers for YouTube videos (forced aspect ratio) */
    .aspect-ratio {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%; /* 9/16 * 100% */
        margin-top: 10px;
        margin-bottom: 10px;
        display: block;
        margin: 0 auto;
    }

    /* YouTube embed */
    .aspect-ratio iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
</style>
