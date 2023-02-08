<svelte:head>
    <title>Demo - Selection Filter</title>
</svelte:head>

<script>
    import { Button, Dialog } from "$lib/smelte";
    import { SearchableList } from "$lib/form";

    export let visible = false;

    let searchableList;

    let item1 = {
        "Test": {},
        "Check": {},
        "Frogs": {},
        "Target": {},
        "Spawn": {},
    };

    let item2 = {
        "Test": {},
        "Check": {},
        "Frogs": {},
        "Target": {},
        "Spawn": {},
    };

    $: if(visible) {
        if(searchableList) {
            if(searchableList.focus)
               searchableList?.focus();
        }
    }
</script>


# This is a Selector Filter

Use inline:

<div class="pad">
    <SearchableList items={item1} maxHeight="100rem" on:select={(s)=>{
        console.log("Select: ", s.detail);
    }}/>
</div>

Or... launch dialogue with the button below:

<Button on:click={() => {
    visible = true;
}}>
Click Here!
</Button>

<Dialog bind:value={visible}>
    <div slot="title" class="title">Select Item</div>
    <SearchableList bind:this={searchableList} items={item2} maxHeight="10rem" on:select={(s)=>{
        console.log("Select: ", s.detail);
    }}/>
</Dialog>


<style>
    .pad {
        padding: 0.5rem;
    }
</style>
