<script lang="ts">
    import { message } from "$lib/core";
    import { SearchableList, TextIconButton } from "$lib/form";
    import { BaseDialog } from "$lib/layout";
    import { Button } from "$lib/smelte";

    import { Document, Folder, FolderOpen } from "@svicons/ionicons-outline";

    export let visible = false;
    let searchableList: SearchableList;

    let item = {
        Test: {},
        "Check - this key carefully!!!": {
            description: "TEST",
            icon: Document,
            buttons: [Document],
        },
        Frogs: {
            icon: Document,
        },
        Target: {},
        Spawn: {
            icon: Document,
        },
    };

    $: if (visible) {
        if (searchableList) {
            if (searchableList.focus) searchableList?.focus();
        }
    }
</script>

<svelte:head>
    <title>Demo - Searchable List</title>
</svelte:head>

<h1>This is a Searchable List</h1>

<p>Use inline:</p>

<div class="pad">
    <SearchableList
        items={item}
        maxHeight="100rem"
        buttons={[Folder, FolderOpen]}
        on:select={(e) => {
            console.log("Select: ", e.detail);
            message.push({
                type: "warning",
                title: "Standard Message",
                message: e.detail,
                timeout: 5,
            });
        }}
        on:button={(e) => {
            console.log("Button: ", e.detail);
            message.push({
                type: "info",
                title: "Standard Message",
                message: e.detail.key + " : " + e.detail.index,
                timeout: 5,
            });
        }}
    />
</div>

<br />
<TextIconButton
    icon={Folder}
    label="Upload"
    outlined
    color="white"
    shape="circle"
/>
<br /><br />

<p>Or... launch dialogue with the button below:</p>

<Button
    on:click={() => {
        visible = true;
    }}
>
    Click Here!
</Button>

<BaseDialog bind:visible title="Searchable List">
    <SearchableList
        bind:this={searchableList}
        items={item}
        maxHeight="10rem"
        on:select={(e) => {
            // setTimeout(() => {visible = false}, 200);
            message.push({
                type: "info",
                title: "Standard Message",
                message: "test",
                // timeout: 5,
            });
        }}
    />
</BaseDialog>

<style>
    .pad {
        padding: 0.5rem;
    }
</style>
