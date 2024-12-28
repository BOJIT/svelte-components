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
    <Terminal class="!h-40 !w-1/2" bind:this={term1} />
    <Terminal class="!h-40 !w-1/2" bind:this={term2} />
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
