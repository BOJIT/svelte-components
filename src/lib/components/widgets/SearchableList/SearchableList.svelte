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

    import scrollIntoView from 'scroll-into-view-if-needed';
    import Search from 'carbon-icons-svelte/lib/Search.svelte';

    import Input from '$lib/components/ui/input/input.svelte';
    import IconButton from '$lib/components/ui/iconbutton/IconButton.svelte';

    /*--------------------------------- Props --------------------------------*/

    type ListItemButton = {
        icon: Icon;
        onclick: (label: string, key?: string) => void;
    };

    type ListItem = {
        label: string;
        sublabel?: string;
        key?: string; // Optional string that is passed in callbacks in case label is not unique
        icon?: Icon;
        buttons?: ListItemButton[]; // Per-item buttons are applied before common buttons to line up
    };

    interface SearchableListProps extends HTMLInputAttributes {
        items?: ListItem[];
        sort?: boolean;
        narrow?: boolean;
        overflowHeight?: string;
        hideSearch?: boolean;
        buttons?: ListItemButton[]; // Buttons in top level prop are applied to all items
        onitemclick?: (label: string, key?: string) => void;
    }

    let {
        items = [],
        sort = false,
        narrow = false,
        overflowHeight = '30rem',
        hideSearch = false,
        buttons = [],
        onitemclick = (l, i) => {},
        ...rest
    }: SearchableListProps = $props();

    let field: HTMLElement;
    let list: HTMLElement;
    let searchString: string = $state('');
    let selectedIndex: number | null = $state(null);

    let filteredItems = $derived(searchList(items, searchString));
    let sanitizedIndex: number | null = $derived(
        filteredItems.length === 1 // If only one item, auto-select
            ? 0
            : selectedIndex === null // Initial state, nothing selected
              ? null
              : selectedIndex >= filteredItems.length // Selection now overruns filtered list
                ? null
                : selectedIndex
    );

    let searchError = $derived(items.length !== 0 && filteredItems.length === 0);

    /*-------------------------------- Methods -------------------------------*/

    /**
     * Call externally to focus the input search field (e.g. on Dialogue)
     */
    export function focus() {
        if (field === undefined) return;
        let input = field.querySelector('input');
        input?.focus();
    }

    function moveIndex(dir: 'up' | 'down') {
        // Ensure that we are in sync with sanitized index
        if (selectedIndex !== sanitizedIndex) selectedIndex = sanitizedIndex;

        if (dir === 'down') {
            if (selectedIndex && selectedIndex > 0) selectedIndex--;
        } else {
            if (selectedIndex === null) selectedIndex = 0;
            else if (selectedIndex < filteredItems.length - 1) selectedIndex++;
        }

        // Ensure component is in view
        if (selectedIndex !== null) {
            const sel = list.children.item(selectedIndex);
            if (sel) scrollIntoView(sel, { scrollMode: 'if-needed' });
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        // Do we have focus?
        if (field === undefined) return;
        let input = field.querySelector('input');
        if (input !== document.activeElement) return;

        // Move selection up and down
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            moveIndex('up');
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            moveIndex('down');
        }

        // Refocus on enter, dispatch if selected
        else if (event.key === 'Enter') {
            event.preventDefault();
            if (sanitizedIndex !== null)
                onitemclick(filteredItems[sanitizedIndex].label, filteredItems[sanitizedIndex].key);

            setTimeout(focus, 100);
        }
    }

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
        return filtered;
    }

    /*------------------------------- Lifecycle ------------------------------*/
</script>

{#snippet listItem(l: ListItem, index: number, selected: boolean, highlight: string)}
    <button
        class="list-item overflow-hidden bg-accent hover:brightness-[90%] dark:hover:brightness-[120%]"
        class:selected
        class:narrow
        tabindex="-1"
        onclick={() => {
            selectedIndex = index;
            onitemclick(l.label, l.key);
        }}
    >
        {#if l.icon}
            <div class="px-1 pl-2">
                <l.icon size={narrow ? 16 : 24} />
            </div>
        {/if}
        <div class="grow-1 w-full overflow-hidden pl-0 pr-1 pt-1">
            <h5>{@html highlightedString(l.label, highlight)}</h5>
            {#if !narrow}
                <h6 class="text-gray-400">{l.sublabel}</h6>
            {/if}
        </div>
        {#if l.buttons}
            {#each l.buttons as b}
                <IconButton
                    variant="ghost"
                    class="aspect-square hover:brightness-[90%] dark:hover:brightness-[120%]"
                    Icon={b.icon}
                    onclick={(e) => {
                        e.stopPropagation();
                        b.onclick(l.label, l.key);
                    }}
                />
            {/each}
        {/if}
        {#each buttons as b}
            <IconButton
                variant="ghost"
                class="aspect-square hover:brightness-[90%] dark:hover:brightness-[120%]"
                Icon={b.icon}
                onclick={(e) => {
                    e.stopPropagation();
                    b.onclick(l.label, l.key);
                }}
            />
        {/each}
    </button>
{/snippet}

<svelte:window on:keydown={handleKeydown} />

<div>
    <form autocomplete="off" bind:this={field} class="p-[4px]">
        <Input
            icon={Search as Icon}
            bind:value={searchString}
            class={`transition ${searchError ? 'focus-visible:ring-red-500' : 'focus-visible:ring-primary-500'}`}
            {...rest}
        />
    </form>

    <div class="p-[4px]" data-simplebar style:max-height={overflowHeight}>
        <div class="list" class:narrow bind:this={list}>
            {#each filteredItems as l, i}
                {@render listItem(l, i, i === sanitizedIndex, searchString)}
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

    .list.narrow {
        gap: 0.25rem;
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

    .list-item.selected {
        box-shadow: 0px 0px 4px #4195fc;
    }

    .list-item.narrow {
        max-height: 2rem;
    }

    h5 {
        margin: 0rem !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;

        font-size: 1.2rem;
    }

    h6 {
        margin: 0rem !important;
        padding-top: 0.2rem;
        text-align: left;

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
