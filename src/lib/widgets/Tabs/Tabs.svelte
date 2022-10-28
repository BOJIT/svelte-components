<script lang="ts">
    /* Custom Scrollbar */
    import 'simplebar';
    import 'simplebar/dist/simplebar.css';

    import theme from "$lib/theme";
    import type { SvelteComponent } from 'svelte';

    /* Callback for tab click event */
    function handleClick(idx: number) {
        index = idx;

        // Update tabline
        tabline.removeAttribute('style');
        tabline.style.cssText = theme.swatchColor(idx);
    }

    /* Array of tabs */
    export let tabs : string[] = [];
    export let components: SvelteComponent[] = null;
    export let componentProps: object[] = null;

    /* Keep track of current tab index */
    export let index = 0;

    let tabline: HTMLElement;
</script>


<div class="container">

    {#await theme.ready(1000) then value}
    <div data-simplebar>
        <ul class="tabs">
            <!-- Render each tab - updates when the list updates -->
            {#each tabs as tab, idx}
                <li style={theme.swatchColor(idx)} class="tab transition" class:is-active={idx == index}
                on:click={() => handleClick(idx)} href="{void(0)}"
                on:keypress={() => handleClick(idx)}>
                    <h6 class="unselectable">{tab}</h6>
                </li>
            {/each}
        </ul>
        <hr bind:this={tabline} class="tabline transition" style={theme.swatchColor(index)}>
    </div>
    {/await}

    {#if components != null}
        {#each components as component, idx}
            <div class="content" class:visible={idx == index}>
                {#if componentProps[idx] && (typeof componentProps[idx] == "object")}
                    <svelte:component this={component} {...componentProps[idx]}/>
                {:else}
                    <svelte:component this={component} />
                {/if}
            </div>
        {/each}
    {/if}

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
</style>
