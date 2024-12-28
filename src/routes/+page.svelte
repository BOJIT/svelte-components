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

    import { Table } from 'carbon-icons-svelte';

    import IconButton from '$lib/components/ui/iconbutton/IconButton.svelte';

    /*--------------------------------- Props --------------------------------*/

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

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
    }}>Test Text</Button
>

<br />
<!-- <IconButton
    Icon={Table}
    width="w-8/12"
    height="h-screen"
    iconSize={256}
    onclick={() => {
        console.log('Hellp!');
    }}
/> -->

<br />
<div class="row">
    <IconButton
        Icon={Table}
        scale={70}
        onclick={() => {
            console.log('Hellp!');
        }}
    />
    <IconButton
        Icon={Table}
        onclick={() => {
            console.log('Hellp!');
        }}
    />
    <IconButton
        Icon={Table}
        scale={55}
        variant="destructive"
        onclick={() => {
            console.log('Hellp!');
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
