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

    import { App, UI } from '$lib';
    import { Svelte, type Icon } from '$lib/components/icons';

    import Home from 'carbon-icons-svelte/lib/Home.svelte';
    import PaintBrush from 'carbon-icons-svelte/lib/PaintBrush.svelte';
    import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';

    import logo from '$lib/assets/logo.png';

    import '../app.css';

    /*--------------------------------- Props --------------------------------*/

    let { children } = $props();

    let app: App;

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<App defaultMode="dark" bind:this={app}>
    <UI.NavBar
        title="@bojit/svelte-components"
        {logo}
        logoLink="https://github.com/BOJIT/svelte-components"
        themeOverride="dark"
        items={[
            {
                type: 'button',
                icon: Svelte,
                label: 'Svelte Docs',
                link: 'https://svelte.dev/',
                visibility: 'desktop'
            },
            {
                type: 'button',
                icon: LogoGithub as Icon,
                label: 'Source Code',
                link: 'https://github.com/BOJIT/svelte-components',
                visibility: 'desktop'
            },
            {
                type: 'separator',
                visibility: 'desktop'
            },
            {
                type: 'button',
                icon: PaintBrush as Icon,
                label: 'Set Theme',
                visibility: 'desktop',
                onclick: () => {
                    app.launchThemeSelector();
                }
            },
            {
                type: 'button',
                icon: Home as Icon,
                label: 'Home',
                link: '/'
            }
        ]}
    />
    <UI.Content>
        {@render children()}
    </UI.Content>
</App>
