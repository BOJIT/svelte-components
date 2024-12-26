<!--
 * @file SearchableLisr.svelte
 * @author James Bennion-Pedley
 * @brief Selector Dropdown/Filter Box
 * @date 11/09/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { writable, type Writable } from 'svelte/store';
    import { createEventDispatcher, SvelteComponent } from 'svelte';

    import TextField from '$lib/smelte/components/TextField/TextField.svelte';

    /* Custom Scrollbar */
    import 'simplebar';
    import 'simplebar/dist/simplebar.css';
    import SearchableListItem from './SearchableListItem.svelte';

    /*--------------------------------- Types --------------------------------*/

    type ListItem = {
        key?: string;
        searchKey?: string; // Use when the search string may not be unique
        description?: string;
        icon?: typeof SvelteComponent<any>;
        buttons?: (typeof SvelteComponent<any>)[];
    };

    type ListDict = {
        [key: string]: ListItem;
    };

    /*--------------------------------- Props --------------------------------*/

    export let items: ListDict = {};
    export let maxHeight: string = '30rem';
    export let buttons: (typeof SvelteComponent<any>)[] = [];

    let field: HTMLElement;
    let list: HTMLElement;
    let searchString: Writable<string> = writable('');
    let selectedIndex: number | null = null;

    const dispatch = createEventDispatcher();

    /*-------------------------------- Methods -------------------------------*/

    export function focus() {
        if (field === undefined) return;

        let input = field.querySelector('input');
        input?.focus();
    }

    function moveIndex(dir: 'up' | 'down') {
        if (dir === 'down') {
            if (selectedIndex && selectedIndex > 0) selectedIndex--;
        } else {
            if (selectedIndex === null) selectedIndex = 0;
            else if (selectedIndex < searchList(items, $searchString).length - 1) selectedIndex++;
        }

        // Ensure component is in view
        if (selectedIndex !== null) {
            const sel = list.children.item(selectedIndex);
            sel?.scrollIntoView(dir === 'down');
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
            if (selectedIndex !== null && selectedIndex < searchList(items, $searchString).length)
                dispatch('select', searchList(items, $searchString)[selectedIndex].key);

            setTimeout(focus, 100);
        }
    }

    function searchList(dict: ListDict, search: string): ListItem[] {
        // Sort alphabetically, return matching keys
        let keys = Object.keys(dict).sort((a, b) => a.localeCompare(b));

        if (search !== '')
            keys = keys.filter((s) => {
                // Use search key if present
                const cmp: string =
                    dict[s].searchKey !== undefined ? (dict[s].searchKey as string) : s;
                return cmp.toLowerCase().includes(search.toLowerCase());
            });

        const list = keys.map((k) => {
            let e: ListItem = dict[k];
            e.key = k; // e.key always reflects the Object key. searchKey may differ
            return e;
        });

        // See if selected entry needs updating
        if (selectedIndex && selectedIndex >= list.length) selectedIndex = null;

        if (list.length === 1) selectedIndex = 0;

        return list;
    }

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="container">
    <form autocomplete="off" bind:this={field} class="overflow">
        <TextField
            outlined
            prepend="search"
            bind:value={$searchString}
            color="secondary"
            error={searchList(items, $searchString).length === 0 && Object.keys(items).length !== 0
                ? 'Item Not Found'
                : false}
        />
    </form>

    <div class="overflow" data-simplebar style:max-height={maxHeight}>
        <div class="list" bind:this={list}>
            {#each searchList(items, $searchString) as l, i}
                <SearchableListItem
                    name={l.searchKey ? l.searchKey : l.key}
                    description={l.description}
                    icon={l.icon}
                    highlight={$searchString}
                    selected={i === selectedIndex}
                    buttons={l.buttons ? buttons.concat(l.buttons) : buttons}
                    on:click={() => {
                        selectedIndex = i;
                        dispatch('select', searchList(items, $searchString)[i].key);
                    }}
                    on:button={(e) => {
                        dispatch('button', {
                            key: l.key,
                            index: e.detail
                        });
                    }}
                />
            {/each}
        </div>
    </div>
</div>

<style>
    .overflow {
        padding-left: 4px;
        padding-right: 4px;
        padding-bottom: 4px;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
