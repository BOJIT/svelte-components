<!--
 * @file SelectorFilter.svelte
 * @author James Bennion-Pedley
 * @brief Selector Dropdown/Filter Box
 * @date 11/09/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang='ts'>
    import Dialog from "$lib/smelte/components/Dialog/Dialog.svelte";
    import TextField from "$lib/smelte/components/TextField/TextField.svelte";
    import List from "$lib/smelte/components/List/List.svelte";

    /* Custom Scrollbar */
    import 'simplebar';
    import 'simplebar/dist/simplebar.css';

    // Public props
    export let label:string = "parameter";
    export let items:string[] = [];
    export let maxHeight:string = "10rem";

    // Dialogue props
    export let dialog = false;
    export let visible = false;
    export let dialog_title:string = "Select Item";

    // State
    let listItems: object[] = [];
    $ : listItems = items.map((i) => {
        return { 'text': i, 'icon': 'chevron_right' }
    });
</script>


{#if dialog}
    <Dialog bind:value={visible}>
        <div slot="title">{dialog_title}</div>

    <div class="contents dialog">
        <TextField label={label} prepend="search"/>
        <div class="overflow" data-simplebar style:max-height={maxHeight}>
            <List items={listItems} />
        </div>
    </div>
    </Dialog>
{:else}
    <div class="contents">
        <TextField label={label} prepend="search"/>
        <div class="overflow" data-simplebar style:max-height={maxHeight}>
            <List items={listItems} />
        </div>
    </div>
{/if}


<style>
    .contents {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .contents > :global(div) {
        margin-bottom: 0rem;
    }

    .overflow {
        border-bottom: 1px solid var(--color-gray-600);
        overflow: scroll;
        background-color: #44444411;
    }

    .overflow  :global(ul) {
        padding: 0;
    }

    .dialog {
        width: 30rem;
    }

    .dialog > .overflow {
        background-color: #aaaaaa33;
    }

    @media (max-width: 768px) {
        .dialog {
            width: 90vw;
        }
    }
</style>
