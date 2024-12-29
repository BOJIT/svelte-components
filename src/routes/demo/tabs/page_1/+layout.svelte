<!--
 * @file +page.svelte
 * @author James Bennion-Pedley
 * @brief Tabs root
 * @date 27/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { page } from '$app/state';

    import { base } from '$app/paths';

    import Tabs from '$lib/components/ui/tabs/Tabs.svelte';

    /*--------------------------------- Props --------------------------------*/

    let { children } = $props();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<svelte:head>
    <title>Tabs</title>
</svelte:head>

<Tabs
    basePath={`${base}/demo/tabs/page_1/`}
    currentPath={page.route.id}
    tabs={[
        {
            label: 'Nested 1',
            link: 'nested_1'
        },
        {
            label: 'Nested 2',
            link: 'nested_2'
        }
    ]}
/>
{@render children?.()}
