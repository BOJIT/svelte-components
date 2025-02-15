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

    import { onDestroy, onMount, tick } from 'svelte';
    import { Spinner } from '$lib/components/icons';
    import { Link } from '$lib/components/ui/link';
    import { textFit } from '$lib/utils/textFit';

    /*--------------------------------- Types --------------------------------*/

    interface BaseTile {
        caption: string;
        link?: string;
    }

    interface ImageTile extends BaseTile {
        type: 'image';
        image: string;
    }

    interface TextTile extends BaseTile {
        type: 'text';
        colour: string;
    }

    interface LinkTile extends BaseTile {
        type: 'link';
        colour: string;
        subcaption: string;
    }

    type Tile = ImageTile | TextTile | LinkTile;

    type TileInternal = {
        tile: Tile;
        idx: number;
        aspect?: number;
        image?: HTMLImageElement;
    };

    /*--------------------------------- Props --------------------------------*/

    interface GalleryProps {
        columns?: number;
        tiles: Tile[];
        gap?: string;
        animate?: boolean;
        lazy?: boolean;
        lazyLoadIncrement?: number;
        animation?: string;
        animationDurationMs?: number;
    }

    let {
        columns = 3,
        tiles = [],
        gap = '1rem',
        animate = false,
        lazy = false,
        lazyLoadIncrement = 2 * columns,
        animation = 'float-up 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both',
        animationDurationMs = 1000
    }: GalleryProps = $props();

    class Column {
        ref = $state<HTMLElement>();
        tiles: TileInternal[] = $state([]);
        tileHeight: number = $state(0);
        marginHeight: number = $state(0);
        pushHeight: number = $state(0);
    }

    // Reactive State
    let mobileView: boolean = $state(false);
    let lazyElements: number = $state(0);
    let tilesToRender: TileInternal[] = $state([]);
    let endPosition = $state<HTMLElement>();

    // Derived State
    let columnElements: Column[] = $derived(
        Array.from(Array(mobileView ? 1 : columns), () => new Column())
    );

    let tileElements: TileInternal[] = $derived(
        tiles.map((t, i) => {
            return {
                tile: t,
                idx: i,
                image: undefined
            };
        })
    );

    let requestedElements: number = $derived(lazy ? lazyElements : tileElements.length);

    // Unreactive state
    let gallery: HTMLElement;
    let mobileBreak: MediaQueryList;
    let layoutInProgress = false;
    let loadInProgress = false;

    // // Handle tracking load-on-scroll
    // $effect(() => {
    //     // If lazy loading, assign intersection observer to end of loaded image tiles
    //     if (!endPosition) return;
    //     if (!lazy) return;
    //     if (requestedElements == tileElements.length) return;
    //     if (loadInProgress) return;

    //     let targetElements = lazyLoadIncrement + tilesToRender.length;
    //     targetElements =
    //         targetElements > tileElements.length ? tileElements.length : targetElements;

    //     if (targetElements > lazyElements)
    //         runWhenInFrame(endPosition, async () => {
    //             console.log('In Frame');
    //             lazyElements = targetElements;
    //         });
    // });

    // Handle fetching unloaed images
    $effect(() => {
        let targetElements = tileElements.slice(0, requestedElements);
        loadImages(targetElements).then(() => {
            tilesToRender = targetElements;
        });
    });

    $inspect(tilesToRender);

    // Handle layout changes
    $effect(() => {
        if (tilesToRender.length > 0) layout(columnElements, tilesToRender);
    });

    /*-------------------------------- Methods -------------------------------*/

    async function loadImages(t: TileInternal[]) {
        const targetImages = t
            .filter((ti) => ti.tile.type === 'image')
            .filter((t) => t.image === undefined);

        const promiseArray = [];
        for (let i of targetImages) {
            promiseArray.push(
                new Promise((resolve) => {
                    const img = new Image();
                    img.onload = function () {
                        i.image = img;
                        i.aspect = img.width / img.height;
                        resolve(0);
                    };

                    const t = i.tile as ImageTile;
                    img.src = t.image;
                })
            );
        }

        await Promise.all(promiseArray);
        return t;
    }

    function runWhenInFrame(el: HTMLElement, f: () => void) {
        const observer = new IntersectionObserver((e) => {
            if (e[0].isIntersecting) {
                observer?.unobserve(el);
                f();
            }
        });
        observer.observe(el);
    }

    function computeHeights(cols: Column[]) {
        // Recompute tile and margin heights
        cols.forEach((c) => {
            if (!c.ref) return;

            let height: number = 0;
            let margin: number = 0;
            let subtiles = Array.from(c.ref.querySelectorAll('.tile')) as HTMLElement[];
            if (subtiles.length > 0) {
                margin = parseInt(
                    window.getComputedStyle(subtiles[0]).getPropertyValue('margin-bottom')
                );

                subtiles.forEach((s: HTMLElement) => {
                    height += s.offsetHeight + margin;
                });
            }

            // Update Props
            c.marginHeight = margin;
            c.tileHeight = height;
        });
    }

    function updateSizing() {
        // Re-compute internal height props
        computeHeights(columnElements);

        // Compute updated push heights
        if (tilesToRender.length === tileElements.length) {
            const maxHeight = Math.max(...columnElements.map((c) => c.tileHeight));
            columnElements.forEach((c) => {
                let h_diff = maxHeight - c.tileHeight - c.marginHeight;
                h_diff = h_diff > 0 ? h_diff : 0;
                c.pushHeight = h_diff;
            });
        }

        // Re-Run Text Fit
        setTimeout(() => {
            textFit(gallery.getElementsByClassName('textfit'), { multiLine: true });
        }, 250);
    }

    async function layout(cols: Column[], renderTiles: TileInternal[]) {
        if (layoutInProgress) return;
        layoutInProgress = true;

        console.log('Entry: ', renderTiles.length);

        // Clear each column and re-render
        cols.forEach((c) => {
            c.tiles = [];
            c.pushHeight = 0;
        });
        await tick();
        await new Promise((r) => requestAnimationFrame(r));
        computeHeights(cols);

        // Place each tile into the shortest column
        for (const e of renderTiles) {
            const colHeight = cols.map((c) => c.tileHeight);
            const target = colHeight.indexOf(Math.min(...colHeight));

            // Add entry to column and wait for render cycle
            cols[target].tiles.push(e);

            await tick();
            await new Promise((r) => requestAnimationFrame(r));
            computeHeights(cols);
        }

        // Update pushes
        await tick();
        updateSizing();

        console.log('Exit: ', renderTiles.length);

        layoutInProgress = false;
    }

    function handleMobileBreak() {
        mobileView = mobileBreak.matches;
    }

    /*------------------------------- Lifecycle ------------------------------*/

    onMount(() => {
        // Setup listener for push resizes
        window.addEventListener('resize', updateSizing);

        // Setup listener for mobile screen break
        mobileBreak = window.matchMedia('(max-width: 768px)');
        mobileBreak.addEventListener('change', handleMobileBreak);
        handleMobileBreak();

        // Add frame animation on scroll if desired
        // if (animate) {
        //     let targets = elementArray(gallery, '.animate');

        //     // Assign CSS animations to run on intersection. Clear on complete
        //     targets.forEach((t: HTMLElement) => {
        //         let observer = new IntersectionObserver((e) => {
        //             if (e[0].isIntersecting) {
        //                 // Apply CSS animations
        //                 t.style.visibility = 'visible';
        //                 t.style.animation = animation;
        //                 observer.unobserve(t);
        //                 setTimeout(() => {
        //                     t.style.animation = '';
        //                 }, animationDurationMs);
        //             }
        //         });
        //         observer.observe(t);
        //     });
        // }
    });

    onDestroy(() => {
        if (typeof window === 'undefined') return;
        mobileBreak?.removeEventListener('change', handleMobileBreak);
        window.removeEventListener('resize', updateSizing);
    });
</script>

<button
    onclick={() => {
        layout(columnElements, tilesToRender);
    }}>LAYOUT</button
>
LEN: {tilesToRender.length}, REQ: {requestedElements}

<div bind:this={gallery} class="gallery" style:gap>
    {#each columnElements as c, i}
        <div class="column" bind:this={c.ref}>
            {#each c.tiles as t}
                <div class="tile" style:margin-bottom={gap} class:animate>
                    <Link href={t.tile.link ? t.tile.link : null}>
                        {#if t.tile.type === 'image'}
                            <div class="image-holder" style:aspect-ratio={t.aspect}>
                                <img src={t.tile.image} alt={t.tile.caption} class="!m-0" />
                                <div class="textfit">{t.tile.caption}</div>
                            </div>
                        {:else if t.tile.type === 'text'}
                            <div style:background-color={t.tile.colour} class="text">
                                <h2 class="!m-0">{t.tile.caption}</h2>
                            </div>
                        {:else if t.tile.type === 'link'}
                            <div style:background-color={t.tile.colour} class="text">
                                <h2 class="!m-0">{t.tile.caption}</h2>
                                <hr />
                                <h4 class="!m-0">{t.tile.subcaption}</h4>
                            </div>
                        {/if}
                    </Link>
                </div>
            {/each}
            {#if columnElements.length > 1 && c.pushHeight > 0}
                <div
                    class="push"
                    style:height={`${c.pushHeight}px`}
                    style:margin-bottom={gap}
                    class:animate
                >
                    <div class="push-tile bg-accent"></div>
                </div>
            {/if}
        </div>
    {/each}
</div>
<div bind:this={endPosition}></div>

{#if tilesToRender.length < tileElements.length}
    <div class="loading-spinner">
        <Spinner size={32} />
    </div>
{/if}

<style>
    /* General */
    .gallery {
        display: flex;
    }

    .column {
        flex-basis: 100%;
    }

    /* Loading Spinner */
    .loading-spinner {
        display: flex;
        justify-content: center;
    }

    /* Image Tiles */
    .tile .image-holder {
        position: relative;
        overflow: hidden;
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
