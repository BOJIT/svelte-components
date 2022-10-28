<script lang="ts">
    import Tabs from "$lib/widgets/Tabs/Tabs.svelte";
    import TestTab1 from "$lib/test/TestTab1.svelte";
    import TestTab2 from "$lib/test/TestTab2.svelte";
    import CodeEditor from "$lib/widgets/CodeEditor/CodeEditor.svelte";

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
