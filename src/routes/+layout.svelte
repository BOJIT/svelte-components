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

    import { App, Content, NavBar } from '$lib';

    import { Home, PaintBrush } from 'carbon-icons-svelte';

    import Svelte from '$lib/components/icons/misc/Svelte.svelte';

    import '../app.css';

    import logo from '$lib/assets/logo.png';

    /*--------------------------------- Props --------------------------------*/

    let { children } = $props();

    let app: App;

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<App defaultMode="dark" bind:this={app}>
    <NavBar.NavBar
        title="@bojit/svelte-components"
        {logo}
        logoLink="https://github.com/BOJIT/svelte-components"
        themeOverride="dark"
        items={[
            {
                type: 'button',
                icon: Svelte,
                link: 'https://svelte.dev/'
            },
            {
                type: 'separator'
            },
            {
                type: 'button',
                icon: PaintBrush,
                onclick: () => {
                    app.launchThemeSelector();
                }
            },
            {
                type: 'button',
                icon: Home,
                link: '/'
            }
        ]}
    />
    <Content.Content>
        {@render children()}
    </Content.Content>
</App>
