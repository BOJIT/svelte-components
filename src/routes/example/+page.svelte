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

    import { utils, UI, Widgets } from '$lib';
    import type { Icon } from '$lib/components/icons';

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

<Widgets.SearchableList
    narrow={false}
    items={[
        {
            label: 'Search Entry',
            sublabel: 'example description',
            icon: Table as Icon
        },
        {
            label: 'Biggest Entry',
            icon: AddComment as Icon
        },
        {
            label: 'Trials of the Past',
            icon: TrashCan as Icon
        }
    ]}
></Widgets.SearchableList>

<UI.Tabs
    tabs={['simplified', 'tabs', 'api', 'entry', 'tabs', 'api', 'entry', 'tabs', 'api', 'entry']}
    fade
>
    <div class="tab">Tab 1</div>
    <div class="tab">Tab 2</div>
    <div class="tab">Tab 3</div>
</UI.Tabs>

<hr />

<UI.Container>
    <Widgets.CAD geometry="https://cdn.bojit.org/files/glb/BOJIT_V3.glb" />
</UI.Container>

<UI.Container class="aspect-auto">
    <Widgets.WaveDrom
        json={{
            head: {
                text: 'WaveDrom Timing Diagram',
                tick: 0,
                every: 2
            },
            signal: [
                { name: 'clk', wave: 'p.....|...' },
                { name: 'Data', wave: 'x.345x|=.x', data: ['head', 'body', 'tail', 'data'] },
                { name: 'Request', wave: '0.1..0|1.0' },
                {},
                { name: 'Acknowledge', wave: '1.....|01.' }
            ]
        }}
    />
</UI.Container>

<UI.Container class="aspect-auto">
    <Widgets.WaveDrom
        json={{
            signal: [
                { name: 'clk', wave: 'p.||..|.......' },
                { name: 'Data', wave: 'x.345x|=.x....', data: ['a', 'b', 'c', 'data'] },
                { name: 'Request', wave: '0.1..0|1.0.1.1' },
                {},
                { name: 'Acknowledge', wave: '1.....|01.....' }
            ]
        }}
    />
</UI.Container>

<UI.Container class="aspect-auto">
    <Widgets.BitField
        json={[
            { name: 'IPO', bits: 8, attr: 'RO' },
            { bits: 7 },
            { name: 'BRK', bits: 5, attr: 'RW', type: 4 },
            { name: 'CPK', bits: 1 },
            { name: 'Clear', bits: 3 },
            { bits: 8 }
        ]}
        options={{
            hspace: 800,
            lanes: 2
        }}
    />
</UI.Container>

<UI.Tabs
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
</UI.Tabs>

<hr />

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
    <UI.Button
        class="h-12"
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
    </UI.Button>

    <UI.IconButton
        Icon={AddComment as Icon}
        variant="secondary"
        label="Add Comment"
        onclick={() => {
            term2.write(`Example Message: ${Date.now()}\n`);
        }}
    />
    <UI.IconButton
        Icon={Table as Icon}
        label="Table"
        onclick={() => {
            term1.write(`Example Message: ${Date.now()}\n`, 33);
        }}
    />
    <UI.IconButton
        Icon={TrashCan as Icon}
        variant="destructive"
        label="Delete"
        shape="circle"
        onclick={() => {
            utils.notify.notify({
                title: 'Item Deleted',
                type: 'success',
                timeout: 5000
            });
        }}
    />
</div>

<form>
    <UI.Input placeholder="Example 1">Enter Text Here</UI.Input>
    <UI.Input placeholder="Example 2">Enter Text Here</UI.Input>
    <UI.Textarea placeholder="Some Text"></UI.Textarea>
</form>

<div class="row">
    <UI.Slider type="single" value={50} max={100} step={1} class="my-3 max-w-[70%]" />
</div>

<style>
    .row {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
    }
</style>
