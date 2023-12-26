<!--
 * @file AddableListItem.svelte
 * @author James Bennion-Pedley
 * @brief Item in Addable Filter
 * @date 11/01/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { createEventDispatcher, SvelteComponent } from "svelte";

    // import createRipple from "$lib/smelte/components/Ripple/ripple.js";
    import IconButton from "$lib/form/IconButton/IconButton.svelte";
    import theme from "$lib/theme";

    /*--------------------------------- Props --------------------------------*/

    export let name: string = "Unknown";
    export let description: string | undefined = "";
    export let icon: typeof SvelteComponent | undefined = undefined;
    export let highlight: string = "";
    export let selected: boolean = false;

    export let buttons: (typeof SvelteComponent)[] = [];

    let dispatch = createEventDispatcher();
    // let ripple = createRipple('white');

    /*-------------------------------- Methods -------------------------------*/

    function highlightedString(str: string, cmp: string) {
        if (cmp === "") return str;

        const re = new RegExp(cmp, "gi");
        const marked = str.replace(re, function (match) {
            return '<span class="highlight">' + match + "</span>";
        });

        return marked;
    }
</script>

<div
    class="container overflow-hidden"
    class:selected
    on:click={(e) => {
        if (e.target && e.target.tagName === "BUTTON") return;

        if (e.target.parentNode.tagName === "BUTTON") return;

        dispatch("click");
    }}
    on:keypress
>
    <div class="left">
        <svelte:component this={icon} height="1.75rem" />
    </div>
    <div class="text">
        <h5>{@html highlightedString(name, highlight)}</h5>
        {#if description !== "" && description !== undefined}
            <h6>{description}</h6>
        {/if}
    </div>
    {#if buttons !== undefined}
        {#each buttons as b, i}
            <IconButton
                icon={b}
                size="2.1rem"
                color="transparent"
                iconColor={$theme === "light" ? "black" : "white"}
                on:click={() => {
                    dispatch("button", i);
                }}
            />
        {/each}
    {/if}
</div>

<style>
    h5 {
        margin: 0rem !important;
        overflow: hidden;
        /* max-width: 18ch; */
        text-overflow: ellipsis;
        white-space: nowrap;

        font-weight: 200 !important;
        font-size: 1.2rem !important;
    }

    h6 {
        margin: 0rem !important;
        color: var(--color-gray-600);
        padding-top: 0.2rem;

        font-weight: 200 !important;
        font-size: 0.85rem !important;
    }

    .container {
        border-radius: 0.5rem;
        background-color: #f5f2f0;
        border: 4px solid transparent;
        transition: background-color 0.2s;
        transition: box-shadow 0.2s;

        display: flex;
        gap: 0.4rem;
        align-items: center;
        padding: 0.125rem;
    }

    :global(.mode-dark) .container {
        background-color: #2d2d2d;
    }

    .container:hover {
        background-color: #dedcdb;
    }

    :global(.mode-dark) .container:hover {
        background-color: #3c3c3c;
    }

    .container.selected {
        box-shadow: 0px 0px 4px #4195fc;
    }

    .left {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .text {
        flex-grow: 1;
        padding: 0.5rem;
        padding-left: 0rem;
        overflow: hidden;
    }

    h5 :global(.highlight) {
        color: #524d0d;
        background-color: #ffe676be;
    }

    :global(.mode-dark) h5 :global(.highlight) {
        color: yellow;
        background-color: #64540b49;
    }
</style>
