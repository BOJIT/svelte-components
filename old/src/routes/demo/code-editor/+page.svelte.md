<svelte:head>

<title>Demo - Code Editor</title>
</svelte:head>

<script>
    import { Container } from "$lib/layout";
    import { CodeEditor } from "$lib/widgets";

    import { python } from "@codemirror/lang-python";

    let codeA = "let x = {\n  prop: 1\n}";
    let codeB = "def my_function():\n  pass";
</script>

# Code Editor

Below is an interactive JS Editor:

<CodeEditor bind:code={codeA} on:save={() => {
console.log("saved");
}} maxHeight="16rem"/>

---

Other languages are supported too!

<CodeEditor language={python()} bind:code={codeB}/>
