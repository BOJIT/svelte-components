<script lang="ts">
    import { goto } from '$app/navigation';

    import { App } from '$lib/core';
    import { Content, Main, NavBar } from '$lib/layout';
    import type { NavItem } from '$lib/layout/NavBar/NavBar.svelte';
    import { mode, palette } from '$lib/theme';

    import logo from '$lib/test/logo.png';

    // Local storage
    import storage from '$lib/test/storage';

    // Icons
    import Contrast from '@svicons/ionicons-outline/contrast.svelte';
    import Home from '@svicons/ionicons-outline/home.svelte';

    function toggleTheme() {
        if ($mode == 'light') $mode = 'dark';
        else $mode = 'light';
    }

    let items: NavItem[] = [
        {
            type: 'button',
            color: 'transparent',
            icon: Contrast,
            label: 'Change Theme',
            callback: toggleTheme
        },
        {
            type: 'button',
            color: 'transparent',
            icon: Home,
            label: 'Home',
            callback: () => {
                goto('/');
            }
        }
    ];

    async function load(resolve, reject) {
        await storage.init();
        resolve();
    }
</script>

<App theme={palette.midnight} {load}>
    <NavBar
        title="@bojit/svelte-components"
        {logo}
        logoLink="https://github.com/BOJIT"
        {items}
        themeOverride="dark"
    />

    <Main>
        <Content>
            <slot />
        </Content>
    </Main>
</App>
