<script lang="ts">
    import Tabs from "$lib/widgets/Tabs/Tabs.svelte";
    import TestTab1 from "$lib/test/TestTab1.demo.svelte";
    import TestTab2 from "$lib/test/TestTab2.demo.svelte";
    import CodeEditor from "$lib/widgets/CodeEditor/CodeEditor.svelte";

    let codeBlock = "let x = {\n\t\n}";
</script>

<svelte:head>
    <title>@bojit/svelte-components</title>
</svelte:head>

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
