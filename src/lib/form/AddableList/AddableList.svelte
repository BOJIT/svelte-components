<!--
 * @file AddableList.svelte
 * @author James Bennion-Pedley
 * @brief List for adding/removing entries
 * @date 11/09/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { writable, type Writable } from "svelte/store";
    import { createEventDispatcher, SvelteComponent } from "svelte";

    import { Add, Remove } from "@svicons/ionicons-outline";

    import theme from "$lib/theme";

    import TextField from "$lib/smelte/components/TextField/TextField.svelte";

    /* Custom Scrollbar */
    import "simplebar";
    import "simplebar/dist/simplebar.css";
    import SearchableListItem from "./AddableListItem.svelte";
    import IconButton from "../IconButton/IconButton.svelte";

    /*--------------------------------- Types --------------------------------*/

    type ListItem = {
        key?: string;
        description?: string;
        icon?: typeof SvelteComponent;
        buttons?: (typeof SvelteComponent)[];
    };

    type ListDict = {
        [key: string]: ListItem;
    };

    /*--------------------------------- Props --------------------------------*/

    export let items: ListDict = {};
    export let maxHeight: string = "30rem";
    export let buttons: (typeof SvelteComponent)[] = [];

    export let addTemplate = {};

    let field: HTMLElement;
    let list: HTMLElement;
    let addString: Writable<string> = writable("");
    let selectedIndex: number | null = null;

    let validAddString: boolean = false;

    const dispatch = createEventDispatcher();

    /*-------------------------------- Methods -------------------------------*/

    export function focus() {
        if (field === undefined) return;

        let input = field.querySelector("input");
        input?.focus();
    }

    function addEntry() {
        if (!validAddString) return;

        items[$addString] = structuredClone(addTemplate);
        $addString = "";
    }

    function sortList(dict: ListDict): ListItem[] {
        // Sort alphabetically, return matching keys
        let keys = Object.keys(dict).sort((a, b) => a.localeCompare(b));

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

    addString.subscribe((a) => {
        validAddString = !(a === "" || a in items);
    });
</script>

<div class="container">
    <form autocomplete="off" bind:this={field} class="overflow side-layout">
        <div class="side-box">
            <TextField
                outlined
                bind:value={$addString}
                color="secondary"
                error={$addString in items ? "duplicate entry" : ""}
            />
        </div>

        <IconButton
            icon={Add}
            size="2.3rem"
            disabled={!validAddString}
            color={validAddString
                ? "var(--color-secondary-300)"
                : "var(--color-error-400)"}
            iconColor={$theme === "light" ? "black" : "white"}
            on:click={addEntry}
        />
    </form>
    <div style="height: 1rem" />

    <div class="overflow" data-simplebar style:max-height={maxHeight}>
        <div class="list" bind:this={list}>
            {#each sortList(items) as l, i}
                {@const btns = (
                    l.buttons ? buttons.concat(l.buttons) : buttons
                ).concat(Remove)}
                <SearchableListItem
                    name={l.key}
                    description={l.description}
                    icon={l.icon}
                    buttons={btns}
                    on:click={() => {
                        dispatch("select", sortList(items)[i].key);
                    }}
                    on:button={(e) => {
                        if (e.detail === btns.length - 1) {
                            if (l.key) delete items[l.key];
                            items = items;
                            return;
                        }
                        dispatch("button", {
                            key: l.key,
                            index: e.detail,
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

    .side-layout {
        width: 100%;

        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
    }

    .side-box {
        flex: 1 0 auto;
    }

    .side-box > :global(div) {
        margin-bottom: 0.5rem;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
