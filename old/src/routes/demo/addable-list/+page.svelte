<script lang="ts">
    import { message } from '$lib/core';
    import { AddableList, TextIconButton } from '$lib/form';
    import { BaseDialog } from '$lib/layout';
    import { Button } from '$lib/smelte';

    import { Document, Folder, FolderOpen } from '@svicons/ionicons-outline';

    export let visible = false;
    let addableList: AddableList;

    let item = {
        Test: {},
        Target: {}
    };

    $: if (visible) {
        if (addableList) {
            if (addableList.focus) addableList?.focus();
        }
    }
</script>

<svelte:head>
    <title>Demo - Addable List</title>
</svelte:head>

<h1>This is a Addable List</h1>

<p>Use inline:</p>

<div class="pad">
    <AddableList
        items={item}
        buttons={[Folder]}
        maxHeight="100rem"
        on:select={(e) => {
            console.log('Select: ', e.detail);
            message.push({
                type: 'warning',
                title: 'Standard Message',
                message: e.detail,
                timeout: 5
            });
        }}
        on:button={(e) => {
            console.log('Button: ', e.detail);
            message.push({
                type: 'info',
                title: 'Button Press Message',
                message: e.detail.key + ' : ' + e.detail.index,
                timeout: 5
            });
        }}
    />
</div>

<br />
<TextIconButton icon={Folder} label="Upload" outlined color="white" shape="circle" />
<br /><br />

<p>Or... launch dialogue with the button below:</p>

<Button
    on:click={() => {
        visible = true;
    }}
>
    Click Here!
</Button>

<BaseDialog bind:visible title="Addable List">
    <AddableList
        bind:this={addableList}
        items={item}
        maxHeight="10rem"
        on:select={(e) => {
            message.push({
                type: 'info',
                title: 'Standard Message',
                message: 'test'
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
