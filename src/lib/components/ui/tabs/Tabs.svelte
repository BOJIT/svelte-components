<!--
 * @file Tabs.svelte
 * @author James Bennion-Pedley
 * @brief Simple Tab Element - either uses links or embedded components
 * @date 12/01/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    /* Custom Scrollbar */

    import theme from '$lib/utils/theme';
    import Link from '../link/Link.svelte';

    /*--------------------------------- Props --------------------------------*/

    type Tab = {
        label: string;
        link?: string;
    };

    interface TabsProps {
        tabs: string[] | Tab[];
        ref?: HTMLDivElement | null;
        children?: any;
        index?: number;
        fade?: boolean;
        urlParam?: string;
        colourOffset?: number;
    }

    let {
        tabs,
        ref = $bindable(null),
        children,
        index = $bindable(0),
        fade = false,
        urlParam,
        colourOffset = 0,
        ...restProps
    }: TabsProps = $props();

    /*-------------------------------- Methods -------------------------------*/

    /* Callback for tab click event */
    function handleClick(idx: number) {
        index = idx;

        // Update tabline
        tabline.removeAttribute('style');
        tabline.style.cssText = theme.swatchCSS(idx);
    }

    let tabline: HTMLElement;
    let tabroot: HTMLElement;

    $effect(() => {
        if (!tabroot) return;

        // All tab children
        let tabSlots = tabroot.querySelectorAll('div.tab');
        tabSlots.forEach((t) => t.classList.remove('active'));
        if (tabSlots[index] !== undefined) {
            setTimeout(() => {
                tabSlots[index].classList.add('active');
            }, 50);
        }
    });
</script>

<div class="root-el" bind:this={ref}>
    <div>
        <ul class="tabs">
            <!-- Render each tab - updates when the list updates -->
            {#each tabs as tab, idx}
                <Link href={typeof tab == 'string' ? undefined : tab.link}>
                    <button
                        style={theme.swatchCSS(idx + colourOffset)}
                        class="tab"
                        class:is-active={idx == index}
                        onclick={() => handleClick(idx)}
                        onkeypress={() => handleClick(idx)}
                        {...restProps}
                    >
                        <h6 class="unselectable">{typeof tab == 'string' ? tab : tab.label}</h6>
                    </button>
                </Link>
            {/each}
        </ul>
        <hr bind:this={tabline} class="tabline" style={theme.swatchCSS(index + colourOffset)} />
    </div>

    <div class="tabroot" class:fade bind:this={tabroot}>
        {@render children?.()}
    </div>
</div>

<style>
    .root-el {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .tabs {
        flex: 0 0 auto;
        overflow-x: scroll;
        scrollbar-width: none;
        display: flex;
        gap: 0.3rem;
        padding: 0.3rem;
    }

    .tabs::-webkit-scrollbar {
        display: none;
    }

    .tab {
        padding: 0.2rem 0.6rem;
        border-radius: 0.5rem;
        background-color: hsl(var(--accent-highlight));
        list-style-type: none;
        transition: background-color 0.3s;
    }

    .tab:hover {
        background-color: hsl(var(--accent));
    }

    .tab.is-active {
        background-color: var(--swatch-base);
        color: var(--swatch-text);
    }

    .tabline {
        border-color: var(--swatch-base);
        margin: 0.2rem 0rem;
        transition: border-color 0.5s;
    }

    h6 {
        margin-bottom: 0rem !important;
    }

    .tabs :global(a) {
        text-decoration: none !important;
        color: inherit !important;
    }

    .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }

    /* Tab anchor */
    .tabroot {
        display: grid;
    }

    .tabroot > :global(div.tab) {
        grid-column: 1;
        grid-row: 1;
        top: 0;
        width: 100%;
        opacity: 0;
        pointer-events: none;
    }

    .tabroot.fade > :global(div.tab) {
        transition: opacity 0.3s;
    }

    .tabroot > :global(div.tab.active) {
        opacity: 100;
        pointer-events: auto;
    }
</style>
