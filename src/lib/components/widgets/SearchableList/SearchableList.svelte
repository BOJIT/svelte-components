<!--
 * @file SearchableList.svelte
 * @author James Bennion-Pedley
 * @brief Searchable List component
 * @date 12/04/2025
 *
 * @copyright Copyright (c) 2025
 *
-->

<script lang="ts">
    import type { Icon } from '$lib/components/icons';
    /*-------------------------------- Imports -------------------------------*/

    import type { HTMLInputAttributes } from 'svelte/elements';

    import Input from '$lib/components/ui/input/input.svelte';

    /*--------------------------------- Props --------------------------------*/

    type ListItemButton = {
        icon: Icon;
        onclick: (label: string, index: number) => void;
    };

    type ListItem = {
        label: string;
        sublabel?: string;
        icon?: Icon;
        buttons?: ListItemButton[];
    };

    interface SearchableListProps extends HTMLInputAttributes {
        items?: ListItem[];
        sort?: boolean;
        narrow?: boolean;
        overflowHeight?: string;
        hideSearch?: boolean;
        onitemclick?: (label: string, index: number) => void;
    }

    let {
        items = [],
        sort = false,
        narrow = false,
        overflowHeight = '30rem',
        hideSearch = false,
        onitemclick = (l, i) => {}
    }: SearchableListProps = $props();

    let field: HTMLElement;
    let list: HTMLElement;
    let searchString: string = $state('');
    let selectedIndex: number | null = $state(null);

    let filteredItems = $derived(searchList(items, searchString));
    let searchError = $derived(items.length !== 0 && filteredItems.length === 0);

    /*-------------------------------- Methods -------------------------------*/

    function highlightedString(str: string, cmp: string) {
        if (cmp === '') return str;

        const re = new RegExp(cmp, 'gi');
        const marked = str.replace(re, function (match) {
            return '<span class="highlight">' + match + '</span>';
        });

        return marked;
    }

    function searchList(input: ListItem[], search: string): ListItem[] {
        // Filter out keys without matches
        let filtered = input.filter((s) => {
            return s.label.toLowerCase().includes(search.toLowerCase());
        });

        // Sort labels alphabetically if required
        if (sort) filtered = filtered.sort((a, b) => a.label.localeCompare(b.label));

        // Ensure selected index is still within valid bounds
        if (selectedIndex && selectedIndex >= filtered.length) selectedIndex = null;
        if (filtered.length === 1) selectedIndex = 0;

        return filtered;
    }

    /*------------------------------- Lifecycle ------------------------------*/
</script>

{#snippet listItem(l: ListItem, index: number, selected: boolean, highlight: string)}
    <div class="list-item overflow-hidden bg-accent" class:selected>
        {#if l.icon}
            <div class="px-1">
                <l.icon size={narrow ? 16 : 24} />
            </div>
        {/if}
        <div class="overflow-hidden pl-0 pr-1 pt-1">
            <h5>{@html highlightedString(l.label, highlight)}</h5>
            <h6 class="text-gray-400">{l.sublabel}</h6>
        </div>
        <!-- BUTTONS -->
    </div>
{/snippet}

<div>
    <form autocomplete="off" bind:this={field} class="list-pad">
        <Input
            bind:value={searchString}
            class={`transition ${searchError ? 'focus-visible:ring-red-500' : ''}`}
        />
    </form>

    <div class="list-pad" data-simplebar style:max-height={overflowHeight}>
        <div class="list" bind:this={list}>
            {#each filteredItems as l, i}
                {@render listItem(l, i, i === selectedIndex, searchString)}
            {/each}
        </div>
    </div>
</div>

<style>
    .list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .list-pad {
        padding-left: 4px;
        padding-right: 4px;
        padding-bottom: 4px;
    }

    .list-item {
        border-radius: 0.5rem;
        border: 4px solid transparent;
        transition: background-color 0.2s;
        transition: box-shadow 0.2s;

        display: flex;
        gap: 0.4rem;
        align-items: center;
        padding: 0.125rem;
    }

    h5 {
        margin: 0rem !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        font-size: 1.2rem;
    }

    h6 {
        margin: 0rem !important;
        padding-top: 0.2rem;

        font-size: 0.85rem;
    }

    h5 :global(.highlight) {
        color: #524d0d;
        background-color: #ffe676be;
    }

    :global(.dark) h5 :global(.highlight) {
        color: yellow;
        background-color: #64540b49;
    }
</style>
