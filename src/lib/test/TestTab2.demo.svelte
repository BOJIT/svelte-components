<script>
    import Content from "$lib/layout/Content/Content.svelte";

    import IconButton from "$lib/form/IconButton/IconButton.svelte";

    import SunnyOutline from "@svicons/ionicons-outline/sunny.svelte";
</script>

<Content>
    <h1>I am regular markdown!</h1>

    <p>This is normal text</p>

    <div>
        <IconButton logo={SunnyOutline}/>
    </div>

</Content>

