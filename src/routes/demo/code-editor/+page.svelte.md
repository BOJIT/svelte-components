<svelte:head>
    <title>Demo - Code Editor</title>
</svelte:head>

<script>
    import { Container } from "$lib/layout";
    import { CodeEditor2 } from "$lib/widgets";

    let codeA = "let x = {\n  prop: 1\n}";
    let codeB = "{\n\t\n}";
</script>

# Code Editor

Below is an interactive JS Editor:

<!-- <Container> -->
<CodeEditor2 bind:code={codeA} on:save={() => {
    console.log("saved");
}} maxHeight="16rem"/>
<!-- </Container> -->

---

{codeA};

---

Other languages are supported too!

<!-- <CodeEditor lineNumbers={true} language="json" bind:code={codeB}/> -->
