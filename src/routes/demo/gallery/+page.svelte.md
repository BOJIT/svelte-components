<svelte:head>
    <title>Demo - Gallery</title>
</svelte:head>

<script>
    import Gallery from "$lib/widgets/Gallery/Gallery.svelte";

    const imgBase = "https://cdn.bojit.org/img";

    let tiles = [
        {
            type: 'image',
            caption: 'Neck Carving Through Carbon Fibre',
            image: imgBase + '/posts/BOJIT_V3-Gallery_1.JPG'
        },
        {
            type: 'image',
            caption: 'Binding Glue-Up',
            image: imgBase + '/posts/BOJIT_V3-Gallery_2.JPG'
        },
        {
            type: 'image',
            caption: 'Fretboard Pinning',
            image: imgBase + '/posts/BOJIT_V3-Gallery_3.JPG'
        },
        {
            type: 'image',
            caption: 'Hardware Fitting',
            image: imgBase + '/posts/BOJIT_V3-Gallery_4.JPG'
        },
        {
            type: 'image',
            caption: 'Neck Blank Levelling',
            image: imgBase + '/posts/BOJIT_V3-Gallery_5.JPG'
        },
        {
            type: 'image',
            caption: 'F-Hole "Thinning"',
            image: imgBase + '/posts/BOJIT_V3-Gallery_6.JPG'
        },
        {
            type: 'image',
            caption: 'Old-Fashioned Resawing!',
            image: imgBase + '/posts/BOJIT_V3-Gallery_7.JPG'
        },
        {
            type: 'image',
            caption: 'Bookmatched Top',
            image: imgBase + '/posts/BOJIT_V3-Gallery_8.JPG'
        },
        {
            type: 'image',
            caption: 'Neck Pocket Routing',
            image: imgBase + '/posts/BOJIT_V3-Gallery_9.JPG'
        },
        {
            type: 'image',
            caption: 'Setting Neck Joint',
            image: imgBase + '/posts/BOJIT_V3-Gallery_10.JPG'
        },
        {
            type: 'image',
            caption: 'My Workshop!',
            image: imgBase + '/posts/BOJIT_V3-Gallery_11.JPG'
        },
        {
            type: 'image',
            caption: 'Finished Build',
            image: imgBase + '/posts/BOJIT_V3-Gallery_12.JPG'
        },
        {
            type: 'image',
            caption: 'Headstock Design',
            image: imgBase + '/posts/BOJIT_V3-Gallery_13.JPG'
        },
        {
            type: 'image',
            caption: 'Back of Headstock',
            image: imgBase + '/posts/BOJIT_V3-Gallery_14.JPG'
        }
    ];
</script>

# Gallery

This is the `Gallery` widget:

<Gallery tiles={[...tiles]}/>