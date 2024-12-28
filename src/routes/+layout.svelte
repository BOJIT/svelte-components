<!--
 * @file +layout.svelte
 * @author James Bennion-Pedley
 * @brief Example top-level layout
 * @date 27/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import App, { notify } from '$lib/components/App.svelte';

    import { Content, NavBar } from '$lib';

    import { Settings, Theater } from 'carbon-icons-svelte';

    import CMake from '$lib/components/icons/misc/CMake.svelte';

    import '../app.css';

    // import logo from '/favicon.png';

    /*--------------------------------- Props --------------------------------*/

    let { children } = $props();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<App defaultMode="dark">
    <NavBar.NavBar
        title="@bojit/svelte-components"
        themeOverride="dark"
        items={[
            {
                type: 'button',
                icon: CMake
            },
            {
                type: 'button',
                icon: Theater,
                visibility: 'mobile'
            },
            {
                type: 'separator'
            },
            {
                type: 'button',
                icon: Settings,
                onclick: () => {
                    notify({
                        type: 'info',
                        title: 'Settings Launched!'
                    });
                }
            }
        ]}
    />
    <Content.Content>
        {@render children()}
    </Content.Content>
</App>
