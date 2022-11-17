<svelte:head>
    <title>Demo - CAD</title>
</svelte:head>

<script>
    import CAD from "$lib/widgets/CAD/CAD.svelte";
</script>

# CAD

Here is an embedded CAD model.

<CAD geometry="https://cdn.bojit.org/files/glb/BOJIT_V3.glb" aspect="16:10"/>

And another:

<CAD geometry="https://cdn.bojit.org/files/glb/kinectIP.glb" />
