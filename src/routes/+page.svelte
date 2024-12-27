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

<Button
    variant="destructive"
    onclick={() => {
        notify({
            title: 'Some Thing',
            type: 'error',
            description: 'this went wrong!'
        });
    }}
>
    <Table size={32} />
</Button>

<style>
</style>
