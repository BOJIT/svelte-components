<svelte:head>
    <title>MDSVex Demo</title>
</svelte:head>

<script>
    import CAD from "$lib/widgets/CAD/CAD.svelte";
    import CodeEditor from "$lib/widgets/CodeEditor/CodeEditor.svelte";
    import CopyButton from "$lib/widgets/CodeEditor/CopyButton.svelte";
    import Gallery from "$lib/widgets/Gallery/Gallery.svelte";
    import LineNumbers from "$lib/widgets/CodeEditor/LineNumbers.svelte";
    import YouTube from "$lib/widgets/YouTube/YouTube.svelte";


    import "prismjs/prism.js";
    import "prismjs/components/prism-bash.js";
    import "prismjs/components/prism-c.js";
    import "prismjs/components/prism-cpp.js";
    import "prismjs/components/prism-json.js";
    import "prismjs/components/prism-python.js";

    let codeA = "let x = {\n\t\n}";
    let codeB = "{\n\t\n}";

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

# Title of Article

This is a basic demo of using `Svelte` components in markdown. Links look like [this](https://github.com):

## Standard Markdown stuff

![BOJIT_V3-Neck_Laminations.JPG]({imgBase}/posts/BOJIT_V3-Neck_Laminations.JPG)


<YouTube src="https://www.youtube.com/embed/Yf2NzRww4Mk"/>


#### Heading 4

- Ordered List
- Test
    1. Nested
    2. List
        1. Test
        2. TEST

---

##### Heading 5

1. Ordered
2. List
    - Nested
    - Unordered


## Syntax highlighting

Standard github-style syntax highlighing works: there are a couple of modifier components that are used to add line numbers and a copy button:

<LineNumbers />
<CopyButton />

```c
uint8_t test = {4, 5, 7};

int main(uint8_t *main)
{
    test[4] = 5;
}
```

This uses `PrismJS` under the hood. All language components except `html`, `css` and `js` have to be included manually.

<LineNumbers />
<CopyButton />

```bash
#!/bin/bash

echo "test"
```

## Special blocks

Below is an interactive JS Editor:

<CodeEditor lineNumbers={true} language="js" bind:code={codeA}/>

Other languages are supported too!

<CodeEditor lineNumbers={true} language="json" bind:code={codeB}/>

Here is an embedded CAD model.

<CAD geometry="https://cdn.bojit.org/files/glb/BOJIT_V3.glb" aspect="16:10"/>

And another:

<CAD geometry="https://cdn.bojit.org/files/glb/kinectIP.glb" />

---

<Gallery tiles={[...tiles]}/>
