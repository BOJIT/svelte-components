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
    }}><AddComment />Test Text</Button
>

<br />
<hr />
<div class="row">
    <IconButton
        Icon={Table}
        shape="circle"
        onclick={() => {
            console.log('Hellp!');
        }}
    />
    <IconButton
        Icon={AddComment}
        onclick={() => {
            console.log('Hellp!');
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
