<svelte:head>
    <title>Demo - Markdown</title>
</svelte:head>

<script>
    import CopyButton from "$lib/widgets/CodeEditor/CopyButton.svelte";
    import LineNumbers from "$lib/widgets/CodeEditor/LineNumbers.svelte";
    import YouTube from "$lib/widgets/YouTube/YouTube.svelte";

    import "prismjs/prism.js";
    import "prismjs/components/prism-bash.js";
    import "prismjs/components/prism-c.js";
    import "prismjs/components/prism-cpp.js";
    import "prismjs/components/prism-json.js";
    import "prismjs/components/prism-python.js";

    const imgBase = "https://cdn.bojit.org/img";
</script>

# Title of Article

This is a basic demo of using `Svelte` components in markdown. Links look like [this](https://github.com):

## Standard Markdown stuff

This is an image.

![BOJIT_V3-Neck_Laminations.JPG]({imgBase}/posts/BOJIT_V3-Neck_Laminations.JPG)

This is a *YouTube* video

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
