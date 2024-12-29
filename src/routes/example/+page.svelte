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

    import { notify } from '$lib/components/App.svelte';

    import { Button } from '$lib/components/ui/button';

    import { Table, AddComment, TrashCan } from 'carbon-icons-svelte';

    import Tabs from '$lib/components/ui/tabs/Tabs.svelte';

    import IconButton from '$lib/components/ui/iconbutton/IconButton.svelte';
    import Terminal from '$lib/components/widgets/Terminal/Terminal.svelte';

    /*--------------------------------- Props --------------------------------*/

    let term1: Terminal;
    let term2: Terminal;

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<svelte:head>
    <title>Example Page</title>
</svelte:head>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Tabs tabs={['simplified', 'tabs', 'api']} fade>
    <div class="tab">Tab 1</div>
    <div class="tab">Tab 2</div>
    <div class="tab">Tab 3</div>
</Tabs>

<hr />

<Tabs
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
        },
        {
            label: 'tab'
        }
    ]}
>
    <div class="tab">Tab 1</div>
    <div class="tab">Tab 2</div>
    <div class="tab">Tab 3</div>
</Tabs>

<hr />

<Button
    onclick={() => {
        notify({
            title: 'Some Error',
            type: 'warning',
            description: 'example',
            timeout: 2000
        });
    }}><AddComment />Test Text</Button
>

<br />
<br />

<div class="row">
    <Terminal
        class="!h-40 !w-1/2"
        bind:this={term1}
        onread={(d: string) => {
            console.log(d);
        }}
    />
    <Terminal class="!h-40 !w-1/2" bind:this={term2} loopback />
</div>

<br />
<hr />
<div class="row">
    <IconButton
        Icon={Table}
        shape="circle"
        onclick={() => {
            term1.write(`Example Message: ${Date.now()}\n`, 33);
        }}
    />
    <IconButton
        Icon={AddComment}
        variant="secondary"
        onclick={() => {
            term2.write(`Example Message: ${Date.now()}\n`);
        }}
    />
    <IconButton
        Icon={TrashCan}
        variant="destructive"
        shape="square"
        onclick={() => {
            notify({
                title: 'Item Deleted',
                type: 'success',
                timeout: 5000
            });
        }}
    />
</div>

<style>
    .row {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
</style>
