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
    import Button from "$lib/smelte/components/Button/Button.svelte";
    import TextField from "$lib/smelte/components/TextField/TextField.svelte";

    /* Custom Scrollbar */
    import 'simplebar';
    import 'simplebar/dist/simplebar.css';

    // Public props
    export let label:string = "parameter";
    export let items:string[] = [];

    // Dialogue props
    export let dialog = false;
    export let visible = false;
    export let dialog_title:string = "Dialogue Title";
</script>


{#if dialog}
    <Dialog bind:value={visible}>
        <div slot="title">{dialog_title}</div>

    <div class="contents">
        <TextField label={label} />
    </div>

        <div slot="actions">
            <Button text on:click={() => visible = false}>Disagree</Button>
            <Button text on:click={() => visible = false}>Agree</Button>
        </div>
    </Dialog>
{:else}
    <div class="contents">
        <TextField label={label} />

        {#each items as i}
            <p>{i}</p>
        {/each}
    </div>
{/if}


<style>
    .contents {
        width: 100%;
    }
</style>
