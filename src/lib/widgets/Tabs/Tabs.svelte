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
    /* Custom Scrollbar */
    import 'simplebar';
    import 'simplebar/dist/simplebar.css';

    import theme from "$lib/theme";
    import type { SvelteComponent } from 'svelte';

    type Tab = {
        label: string,
        link?: string,
        component?: SvelteComponent,
        props?: object
    }

    /* Callback for tab click event */
    function handleClick(idx: number) {
        index = idx;

        // Update tabline
        tabline.removeAttribute('style');
        tabline.style.cssText = theme.swatchColor(idx);
    }

    /* Array of tabs */
    export let tabs : Tab[] = [];

    /* Keep track of current tab index */
    export let index = 0;

    export let fade: boolean = false;

    let tabline: HTMLElement;
    let tabroot: HTMLElement;

    $: {
        if(tabroot) {
            // All tab children
            let tabSlots = tabroot.querySelectorAll("div.tab");
            tabSlots.forEach((t) => t.classList.remove('active'));
            if(tabSlots[index] !== undefined) {
                setTimeout(() => {
                    tabSlots[index].classList.add('active');
                }, 50);
            }
        }
    }
</script>


<div class="container">
    {#await theme.ready(1000) then value}
    <div data-simplebar>
        <ul class="tabs">
            <!-- Render each tab - updates when the list updates -->
            {#each tabs as tab, idx}
            {#if "link" in tab }
            <a href={tab.link}>
                <li style={theme.swatchColor(idx)} class="tab transition" class:is-active={idx == index}
                on:click={() => handleClick(idx)}
                on:keypress={() => handleClick(idx)}>
                    <h6 class="unselectable">{tab.label}</h6>
                </li>
            </a>
            {:else}
                <li style={theme.swatchColor(idx)} class="tab transition" class:is-active={idx == index}
                on:click={() => handleClick(idx)}
                on:keypress={() => handleClick(idx)}>
                    <h6 class="unselectable">{tab.label}</h6>
                </li>
            {/if}
            {/each}
        </ul>
        <hr bind:this={tabline} class="tabline transition" style={theme.swatchColor(index)}>
    </div>
    {/await}

    {#each tabs as tab, idx}
        {#if "component" in tab }
            <div class="content" class:visible={idx == index}>
                {#if "props" in tab}
                    <svelte:component this={tab.component} {...tab.props}/>
                {:else}
                    <svelte:component this={tab.component} />
                {/if}
            </div>
        {/if}
    {/each}

    <div class="tabroot" class:fade bind:this={tabroot}>
        <slot />
    </div>
</div>


<style>
    .container {
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
        background-color: var(--color-gray-400);
        list-style-type: none;
    }

    :global(.mode-dark) .tab {
        background-color: var(--color-gray-700);
    }

    .tab:hover {
        background-color: var(--color-gray-500);
    }

    :global(.mode-dark) .tab:hover {
        background-color: var(--color-gray-600);
    }

    .tab.is-active {
        background-color: var(--color-swatch-base-light);
        color: var(--color-swatch-text-light);
    }

    :global(.mode-dark) .tab.tab.is-active {
        background-color: var(--color-swatch-base-dark);
        color: var(--color-swatch-text-dark);
    }

    .tabline {
        border-color: var(--color-swatch-base-light);
        margin: 0.2rem 0rem;
    }

    :global(.mode-dark) .tabline {
        border-color: var(--color-swatch-base-dark);
    }

    h6 {
        margin-bottom: 0rem !important;
    }

    a {
        text-decoration: none !important;
        color: inherit !important;
    }

    .content {
        flex: 5 0 auto;
        height: 100%;
        width: 100%;
        display: none;
    }

    .content.visible {
        display: block;
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
        /* visibility: hidden; */
        opacity: 0;
    }

    .tabroot.fade > :global(div.tab) {
        transition: opacity 0.3s;
    }

    .tabroot > :global(div.tab.active) {
        /* visibility: visible; */
        opacity: 100;
    }
</style>
