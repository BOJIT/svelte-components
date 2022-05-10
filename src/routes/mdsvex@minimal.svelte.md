<svelte:head>
    <title>MDSVex Demo</title>
</svelte:head>

<script>
    import CodeEditor from "$lib/widgets/CodeEditor/CodeEditor.svelte";
    import CopyButton from "$lib/widgets/CodeEditor/CopyButton.svelte";
    import LineNumbers from "$lib/widgets/CodeEditor/LineNumbers.svelte";
    import CAD from "$lib/widgets/CAD/CAD.svelte";

    import "prismjs/prism.js";
    import "prismjs/components/prism-bash.js";
    import "prismjs/components/prism-c.js";
    import "prismjs/components/prism-cpp.js";
    import "prismjs/components/prism-json.js";
    import "prismjs/components/prism-python.js";

    let codeA = "let x = {\n\t\n}";
    let codeB = "{\n\t\n}";
</script>

# Title of Article

This is a basic demo of using `Svelte` components in markdown. Links look like [this](https://github.com):

## Standard Markdown stuff

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

<CAD geometry="https://cdn.bojit.org/files/glb/BOJIT_V3.glb" />

And another:

<CAD geometry="https://cdn.bojit.org/files/glb/kinectIP.glb" />
