<svelte:head>
    <title>Demo - Selection Filter</title>
</svelte:head>

<script>
    import { Button } from "$lib/smelte";
    import { SelectorFilter } from "$lib/form";

    export let visible = false;

    export let items = [
        "Test",
        "Check",
        "Frogs",
        "Test",
        "Spawn",
    ];
</script>

# This is a Selector Filter

Use inline:

<SelectorFilter items={items} maxHeight="15rem"/>

Or... launch dialogue with the button below:

<Button on:click={() => {
    visible = true;
}}>
Click Here!
</Button>

<SelectorFilter dialog bind:visible items={items}/>
