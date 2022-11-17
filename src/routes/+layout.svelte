<script lang="ts">
    import { App } from "$lib/core";
    import { Content, Main, NavBar } from "$lib/layout";
    import type { NavItem } from "$lib/layout/NavBar/NavBar.svelte";
    import { mode, palette } from "$lib/theme";

    import logo from "$lib/test/logo.png";

    // Icons
    import Contrast from "@svicons/ionicons-outline/contrast.svelte";
    import Home from "@svicons/ionicons-outline/home.svelte";

    function toggleTheme() {
        if($mode == 'light')
            $mode = 'dark';
        else
            $mode = 'light';
    }

    let items: NavItem[] = [
        {
            type: "button",
            color: "transparent",
            icon: Contrast,
            callback: toggleTheme
        },
        {
            type: "button",
            color: "transparent",
            icon: Home,
            callback: () => {
                window.location.href = "/";
            }
        },
    ];
</script>

<App theme={palette.midnight}>
    <NavBar
        title="@bojit/svelte-components"
        logo={logo}
        logoLink="https://github.com/BOJIT"
        items={items}
        themeOverride="dark"
    />

    <Main>
        <Content>
            <slot />
        </Content>
    </Main>
</App>
