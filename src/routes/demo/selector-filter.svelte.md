<svelte:head>
    <title>Demo - Selection Filter</title>
</svelte:head>

<script>
    import Button from "$lib/smelte/components/Button/Button.svelte";

    import SelectorFilter from "$lib/form/SelectorFilter/SelectorFilter.svelte";

    export let visible = false;

    export let items = [
        "Test",
        "Check"
    ];
</script>

# This is a Selector Filter

Use inline:

<SelectorFilter items={items}/>

Or... launch dialogue with the button below:

<Button on:click={() => {
    visible = true;
}}>
Click Here!
</Button>

<SelectorFilter dialog bind:visible items={items}/>
