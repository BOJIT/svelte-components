<script lang="ts">
    import { Tabs, CodeEditor } from "$lib/widgets";
    import TestTab1 from "$lib/test/TestTab1.svelte";
    import TestTab2 from "$lib/test/TestTab2.svelte";

    let codeBlock = "let x = {\n\t\n}";
</script>

<svelte:head>
    <title>Demo - Tabs</title>
</svelte:head>

<div>
    <Tabs
        tabs={[
            "CAD",
            "Text",
            "Code Block",
        ]}
        components={[
            TestTab1,
            TestTab2,
            CodeEditor,
        ]}
        componentProps={[
            {},
            {},
            {
                lineNumbers: true,
                code: codeBlock
            },
        ]}
    />
</div>
