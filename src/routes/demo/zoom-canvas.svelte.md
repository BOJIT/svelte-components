<svelte:head>
    <title>Demo - Zoom Canvas</title>
</svelte:head>

<script>
    import ZoomCanvas from "$lib/widgets/ZoomCanvas/ZoomCanvas.svelte";
    import Line from "$lib/widgets/ZoomCanvas/Line.svelte";
</script>

# This is a Zoomable Canvas Element

Wrapped text behaviour either side looks like this:

<ZoomCanvas aspect="16:9">
    <Line start={[10, 20]} end={[150, 100]} />
</ZoomCanvas>

More text
