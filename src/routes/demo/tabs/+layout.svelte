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

    import { UI } from '$lib';

    /*--------------------------------- Props --------------------------------*/

    let { children } = $props();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<svelte:head>
    <title>Demo - Tabs</title>
</svelte:head>

<UI.Tabs
    basePath={`${base}/demo/tabs/`}
    currentPath={page.route.id}
    tabs={[
        {
            label: 'Page 1',
            link: 'page_1'
        },
        {
            label: 'Page 2',
            link: 'page_2'
        },
        {
            label: 'Page 3',
            link: 'page_3'
        }
    ]}
/>
{@render children?.()}
