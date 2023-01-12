<script>
    import Content from "$lib/layout/Content/Content.svelte";

    import IconButton from "$lib/form/IconButton/IconButton.svelte";
    import Button from "$lib/smelte/components/Button/Button.svelte";
    import TextField from "$lib/smelte/components/TextField/TextField.svelte";

    import SunnyOutline from "@svicons/ionicons-outline/sunny.svelte";
</script>

<svelte:head>
    <title>Tab 2 - MDsveX Demo</title>
</svelte:head>

<Content>
    <h1>Tab 2 - MDsveX Demo</h1>

    <p>This is normal text</p>

    <hr>

    <div>
        <IconButton icon={SunnyOutline} />
    </div>

    <hr>
    <Button>TEST BUTTON</Button>
    <Button>TEST BUTTON</Button>

    <br><br>

    <TextField label="name" prepend="search"/>

</Content>

