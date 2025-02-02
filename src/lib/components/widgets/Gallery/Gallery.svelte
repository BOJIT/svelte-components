<!--
 * @file Gallery.svelte
 * @author James Bennion-Pedley
 * @brief Gallery Component for Images with Labels
 * @note THIS CODE IS HORRIBLE! However it's a key part of my website homepage styling,
 * so I don't want to overhaul it in a way that changes my homepage.
 * @date 13/07/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { onMount } from 'svelte';
    import { Spinner } from '$lib/components/icons';
    import { Link } from '$lib/components/ui/link';
    import { textFit } from '$lib/utils/textFit';

    /*--------------------------------- Props --------------------------------*/

    type Tile = {
        type: 'image' | 'link' | 'text';
        caption: string;
        subcaption?: string;
        image?: string;
        link?: string;
        colour?: string;
        handle?: HTMLElement; // Private
        loaded?: boolean; // Private
    };

    interface GalleryProps {
        columns?: number;
        tiles: Tile[];
        gap?: string;
        animate?: boolean;
        lazy?: boolean;
        animation?: string;
    }

    let {
        columns = 3,
        tiles = [],
        gap = '1rem',
        animate = false,
        lazy = false,
        animation = 'float-up 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'
    }: GalleryProps = $props();

    // TODO implement lazy-loading

    // State
    let loading = $state(true);

    /*-------------------------------- Methods -------------------------------*/

    function elementArray(parent: HTMLElement, q: string): HTMLElement[] {
        return Array.from(parent.querySelectorAll(q));
    }

    function columnHeight(col: HTMLElement, q: string) {
        let height: number = 0;
        let subtiles = elementArray(col, q);

        if (subtiles.length > 0) {
            let margin = parseInt(
                window.getComputedStyle(subtiles[0]).getPropertyValue('margin-bottom')
            );

            subtiles.forEach((s: HTMLElement) => {
                height += s.offsetHeight + margin;
            });
        }

        return height;
    }

    function updatePushes(cols: Element[]) {
        cols.forEach((c: Element) => {
            // Move push to end of column
            let push = c.querySelector('.push') as HTMLElement;
            c.appendChild(push);
        });

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                let pushData: ({ push: HTMLElement; margin: number; height: number } | null)[] =
                    cols.map((c: Element) => {
                        // Calculate target height
                        let endTile = Array.from(c.querySelectorAll('.tile')).pop();

                        if (!endTile) return null;

                        let push = c.querySelector('.push') as HTMLElement;
                        let height = Math.round(endTile.getBoundingClientRect().bottom);
                        let margin = parseInt(
                            window.getComputedStyle(push).getPropertyValue('margin-bottom')
                        );

                        return {
                            push,
                            margin,
                            height
                        };
                    });

                // Compute push size and update DOM
                let minHeight = Math.max(...pushData.map((p) => (p ? p.height : 0)));
                pushData.forEach((p) => {
                    if (!p) return;

                    p.height = Math.abs(p.height - minHeight);
                    if (p.height < p.margin) {
                        p.height = 0;
                    } else {
                        p.height = p.height - p.margin;
                    }
                    p.push.style.height = `${p.height}px`;
                });
            });
        });
    }

    // Layout engine
    let gallery: HTMLElement;
    let scratch: HTMLElement;
    function layout() {
        if (!gallery) return;

        // Get visible columns
        let cols = elementArray(gallery, '.column').filter((c: HTMLElement) => {
            return c.offsetParent !== null;
        });

        // Move to scratch space for layuout
        tiles.forEach((t) => {
            if (t.handle) scratch.appendChild(t.handle);
        });

        // Allocate to columns
        tiles.forEach((t) => {
            // TODO return if pending

            let colHeight: number[] = cols.map((c: HTMLElement) => {
                return columnHeight(c, '.tile');
            });

            const min = Math.min(...colHeight);
            const target = colHeight.indexOf(min);

            // Reassign parent node
            if (t.handle) cols[target].appendChild(t.handle);
        });

        // Create pushes
        updatePushes(cols);

        // Make text fit
        requestAnimationFrame(() => {
            textFit(gallery.getElementsByClassName('textfit'), { multiLine: true });
        });
    }

    /*------------------------------- Lifecycle ------------------------------*/

    $effect(() => {
        layout(); // This probably causes many false triggers
    });

    onMount(() => {
        // Create callback for image loading state
        window.addEventListener('resize', layout);

        // Add frame animation on scroll if desired
        if (animate) {
            let targets = elementArray(gallery, '.animate');

            targets.forEach((t: HTMLElement) => {
                let observer = new IntersectionObserver((e) => {
                    if (e[0].isIntersecting) {
                        // Apply CSS animations
                        t.style.visibility = 'visible';
                        t.style.animation = animation;
                        observer.unobserve(t);
                        setTimeout(() => {
                            t.style.animation = ''; // this is horrible
                        }, 1000);
                        return;
                    }
                });

                observer.observe(t);
            });
        }

        // HACK - ideally we don't want to wait until everything has loaded
        const loadCheck = setInterval(() => {
            let imgTiles = tiles.filter((t) => t.type === 'image');

            let status = imgTiles.map((t) => {
                return t.handle?.querySelector('img')?.complete;
            });

            if (status.every((s) => s === true)) {
                clearInterval(loadCheck);
                layout();
                loading = false;
            }
        }, 50);
    });
</script>

{#if loading}
    <div class="loading-spinner">
        <Spinner size={32} />
    </div>
{/if}

<div bind:this={gallery} class="gallery" style:gap>
    {#each { length: columns } as _, i}
        <div class="column" class:first={i == 0}>
            <div class="push" style:margin-bottom={gap} class:animate>
                <div class="push-tile bg-accent"></div>
            </div>
        </div>
    {/each}

    <div bind:this={scratch} class="scratch">
        {#each tiles as t}
            <!-- svelte-ignore binding_property_non_reactive -->
            <div class="tile" style:margin-bottom={gap} bind:this={t.handle} class:animate>
                <Link href={t.link ? t.link : null}>
                    {#if t.type === 'image'}
                        <div class="image-holder">
                            <img src={t.image} alt={t.caption} />
                            <div class="textfit">{t.caption}</div>
                        </div>
                    {:else if t.type === 'text'}
                        <div style:background-color={t.colour} class="text">
                            <h2>{t.caption}</h2>
                        </div>
                    {:else if t.type === 'link'}
                        <div style:background-color={t.colour} class="text">
                            <h2>{t.caption}</h2>
                            <hr />
                            <h4>{t.subcaption}</h4>
                        </div>
                    {/if}
                </Link>
            </div>
        {/each}
    </div>
</div>

<style>
    /* General */
    .gallery {
        display: flex;
    }

    .column {
        flex-grow: 1;
    }

    .scratch {
        display: none;
    }

    @media (max-width: 768px) {
        .column:not(.first) {
            display: none;
        }
    }

    /* Loading Spinner */
    .loading-spinner {
        display: flex;
        justify-content: center;
    }

    /* Image Tiles */
    .tile .image-holder {
        position: relative;
    }

    .tile .image-holder img {
        width: 100%;
        transition: opacity 0.2s ease-in;
        -moz-transition: opacity 0.2s ease-in;
        -webkit-transition: opacity 0.2s ease-in;
        -o-transition: opacity 0.2s ease-in;
    }

    .tile .image-holder .textfit {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        text-align: center;
        font-family: var(--font-headings);

        :global(.textFitted) {
            font-family: var(--font-headings);
        }

        white-space: normal !important;
        overflow-wrap: normal;

        opacity: 0;
        transition: opacity 0.2s ease-in;
        -moz-transition: opacity 0.2s ease-in;
        -webkit-transition: opacity 0.2s ease-in;
        -o-transition: opacity 0.2s ease-in;

        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .tile .image-holder:hover img {
        opacity: 0.5;
    }

    .tile .image-holder:hover .textfit {
        opacity: 1;
    }

    /* Text and Link Tiles */
    .tile .text {
        padding-left: 1.8rem;
        padding-right: 1.8rem;
        transition: background-color 0.2s ease-in;
        -moz-transition: background-color 0.2s ease-in;
        -webkit-transition: background-color 0.2s ease-in;
        -o-transition: background-color 0.2s ease-in;
    }

    .tile .text h2,
    h4 {
        text-align: center;
        margin: 0;
        padding: 15px;
        transition: color 0.2s ease-in;
        -moz-transition: color 0.2s ease-in;
        -webkit-transition: color 0.2s ease-in;
        -o-transition: color 0.2s ease-in;
    }

    .tile h2 {
        font-size: 1.8rem;
        color: black;
    }

    .tile h4 {
        font-size: 1.3rem;
        color: #727471;
    }

    .tile hr {
        margin: 0;
        border-color: white;
        height: 1px;
        transition: border-color 0.2s ease-in;
        -moz-transition: border-color 0.2s ease-in;
        -webkit-transition: border-color 0.2s ease-in;
        -o-transition: border-color 0.2s ease-in;
    }

    .tile .text:hover {
        background-color: black !important;
    }

    .tile .text:hover h2 {
        color: whitesmoke !important;
    }

    :global(.mode-dark) .tile .text:hover {
        background-color: whitesmoke !important;
    }

    :global(.mode-dark) .tile .text:hover h2 {
        color: black !important;
    }

    :global(.mode-dark) .tile .text:hover hr {
        border-color: black !important;
    }

    /* Push block */
    .push {
        position: relative;
    }

    .push-tile {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        .push {
            display: none;
        }
    }

    /* Animation */
    @keyframes -global-float-up {
        0% {
            transform: translateY(500px);
            opacity: 0;
        }
        100% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
    }

    .tile.animate {
        visibility: hidden;
    }

    .push.animate {
        visibility: hidden;
    }
</style>
