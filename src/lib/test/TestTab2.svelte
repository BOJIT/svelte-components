<script>
    import Content from "$lib/layout/Content/Content.svelte";

    import IconButton from "$lib/form/IconButton/IconButton.svelte";
    import Button from "$lib/smelte/components/Button/Button.svelte";
    import TextField from "$lib/smelte/components/TextField/TextField.svelte";

    import SunnyOutline from "@svicons/ionicons-outline/sunny.svelte";
</script>

<Content>
    <h1>I am regular markdown!</h1>

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

