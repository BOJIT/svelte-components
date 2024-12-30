<!--
 * @file +page.svelte
 * @author James Bennion-Pedley
 * @brief Example Page
 * @date 27/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { Button, IconButton, Input, Slider, Tabs, utils, Widgets } from '$lib';

    import Table from 'carbon-icons-svelte/lib/Table.svelte';
    import AddComment from 'carbon-icons-svelte/lib/AddComment.svelte';
    import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';

    /*--------------------------------- Props --------------------------------*/

    let term1: Widgets.Terminal;
    let term2: Widgets.Terminal;

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<svelte:head>
    <title>Example Page</title>
</svelte:head>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Tabs.Tabs
    tabs={['simplified', 'tabs', 'api', 'entry', 'tabs', 'api', 'entry', 'tabs', 'api', 'entry']}
    fade
>
    <div class="tab">Tab 1</div>
    <div class="tab">Tab 2</div>
    <div class="tab">Tab 3</div>
</Tabs.Tabs>

<hr />

<Tabs.Tabs
    colourOffset={1}
    tabs={[
        {
            label: 'TEST'
        },
        {
            label: 'this'
        },
        {
            label: 'is an example'
        }
    ]}
>
    <div class="tab">Tab 1</div>
    <div class="tab">Tab 2</div>
    <div class="tab">Tab 3</div>
</Tabs.Tabs>

<hr />

<Button.Button
    onclick={() => {
        utils.notify.notify({
            title: 'Some Error',
            type: 'warning',
            description: 'example',
            timeout: 2000
        });
    }}
>
    <AddComment />Test Text
</Button.Button>

<br />
<br />

<div class="row">
    <Widgets.Terminal
        class="!h-40 !w-1/2"
        bind:this={term1}
        onread={(d: string) => {
            console.log(d);
        }}
    />
    <Widgets.Terminal class="!h-40 !w-1/2" bind:this={term2} loopback />
</div>

<br />
<hr />
<div class="row">
    <IconButton.IconButton
        Icon={Table}
        shape="circle"
        onclick={() => {
            term1.write(`Example Message: ${Date.now()}\n`, 33);
        }}
    />
    <IconButton.IconButton
        Icon={AddComment}
        variant="secondary"
        onclick={() => {
            term2.write(`Example Message: ${Date.now()}\n`);
        }}
    />
    <IconButton.IconButton
        Icon={TrashCan}
        variant="destructive"
        shape="square"
        onclick={() => {
            utils.notify.notify({
                title: 'Item Deleted',
                type: 'success',
                timeout: 5000
            });
        }}
    />
</div>

<br />
<div class="row">
    <Slider.Slider value={[50]} max={100} step={1} class="max-w-[70%]" />
</div>

<br />
<form>
    <Input.Input>Enter Text Here</Input.Input>
    <Input.Input>Enter Text Here</Input.Input>
</form>

<style>
    .row {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }
</style>
