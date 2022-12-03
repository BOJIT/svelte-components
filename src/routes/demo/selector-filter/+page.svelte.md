<svelte:head>
    <title>Demo - Selection Filter</title>
</svelte:head>

<script>
    import { Button, Dialog } from "$lib/smelte";
    import { SelectorFilter } from "$lib/form";

    export let visible = false;

    export let items = [
        "Test",
        "Check",
        "Frogs",
        "Target",
        "Spawn",
    ];
</script>


# This is a Selector Filter

Use inline:

<SelectorFilter items={items} maxHeight="15rem" on:select={(s)=>{
    console.log("Select: ", s.detail);
}}/>

Or... launch dialogue with the button below:

<Button on:click={() => {
    visible = true;
}}>
Click Here!
</Button>

<Dialog bind:value={visible}>
    <div slot="title" class="title">Select Item</div>
    <SelectorFilter items={items} dialog/>
</Dialog>
