<svelte:head>
    <title>Demo - Code Editor</title>
</svelte:head>

<script>
    import { Container } from "$lib/layout";
    import { CodeEditor, CodeEditor2 } from "$lib/widgets";

    import "prismjs/prism.js";
    import "prismjs/components/prism-bash.js";
    import "prismjs/components/prism-json.js";

    let codeA = "let x = {\n\tprop: 1\n}";
    let codeB = "{\n\t\n}";
</script>

# Code Editor

Below is an interactive JS Editor:

<Container>
    <CodeEditor2 bind:code={codeA} padding="4rem" on:save={() => {
        console.log("saved");
    }}/>
</Container>

---

{codeA};

---

Other languages are supported too!

<!-- <CodeEditor lineNumbers={true} language="json" bind:code={codeB}/> -->
