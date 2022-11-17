<svelte:head>
    <title>Demo - Code Editor</title>
</svelte:head>

<script>
    import { CodeEditor } from "$lib/widgets";

    import "prismjs/prism.js";
    import "prismjs/components/prism-bash.js";
    import "prismjs/components/prism-json.js";

    let codeA = "let x = {\n\t\n}";
    let codeB = "{\n\t\n}";
</script>

# Code Editor

Below is an interactive JS Editor:

<CodeEditor lineNumbers={true} language="js" bind:code={codeA}/>

Other languages are supported too!

<CodeEditor lineNumbers={true} language="json" bind:code={codeB}/>
