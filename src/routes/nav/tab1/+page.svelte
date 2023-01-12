<script>
    import Container from "$lib/layout/Container/Container.svelte";
    import CAD from "$lib/widgets/CAD/CAD.svelte";
</script>

<svelte:head>
    <title>Tab 1 - CAD Demo</title>
</svelte:head>

<h1>Tab 1 - CAD Demo</h1>

<Container>
    <CAD geometry="https://cdn.bojit.org/files/glb/BOJIT_V3.glb" />
</Container>

