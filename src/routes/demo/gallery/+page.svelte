<script lang="ts">
    import { Widgets } from '$lib';

    const ids = [...Array(20).keys()];
    let randomTiles = ids.map((i) => {
        var labels = [
            '',
            '',
            '',
            ' - With Longer Description',
            ' - Small Footnote',
            ' - With life history essay to show text resizing'
        ];
        var label = labels[Math.floor(Math.random() * labels.length)];
        return {
            type: 'image',
            caption: `Image ${i}${label}`,
            image: `https://picsum.photos/500/${Math.round(400 + Math.random() * 200)}`
        };
    });
</script>

<svelte:head>
    <title>Demo - Gallery</title>
</svelte:head>

<!-- # Gallery

TODO write full docs -->

<!-- ```svelte -->
<!-- <script lang="ts">
    import { Widgets } from '@bojit/svelte-components';
</script>

<Widgets.Gallery tiles={randomTiles} /> -->
<!-- ``` -->

<!-- --- -->

<!-- <Widgets.Gallery tiles={[...tiles]}/> -->

<!-- ```svelte -->
<!-- <Widgets.Gallery tiles={[...tiles]} animate columns={2} /> -->
<!-- ``` -->

<div style:height="700px" style:background-color="green"></div>

<Widgets.Gallery tiles={randomTiles} columns={3} lazy />
