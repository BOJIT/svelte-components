<svelte:head>
    <title>Demo - Selection Filter</title>
</svelte:head>

<script>
    import { SearchableList } from "$lib/form";
    import { BaseDialog } from "$lib/layout";
    import { Button } from "$lib/smelte";

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


# This is a Searchable List

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

<BaseDialog bind:visible title="Searchable List">
    <SearchableList bind:this={searchableList} items={item2} maxHeight="10rem" on:select={(s)=>{
        console.log("Select: ", s.detail);
        setTimeout(() => {visible = false}, 200);
    }}/>
</BaseDialog>


<style>
    .pad {
        padding: 0.5rem;
    }
</style>
