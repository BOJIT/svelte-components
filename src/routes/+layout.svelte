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

    import NavBar from '$lib/components/ui/navbar/NavBar.svelte';

    import { Settings, Theater } from 'carbon-icons-svelte';

    import CMake from '$lib/components/icons/misc/CMake.svelte';

    import '../app.css';

    /*--------------------------------- Props --------------------------------*/

    let { children } = $props();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<App defaultMode="dark">
    <NavBar
        title="My App"
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
    {@render children()}
</App>
