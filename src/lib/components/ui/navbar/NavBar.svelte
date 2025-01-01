<!--
 * @file NavBar.svelte
 * @author James Bennion-Pedley
 * @brief Simple Navbar / top bar for apps
 * @date 28/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script module lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { Icon } from '$lib/components/icons';

    /*--------------------------------- Types --------------------------------*/

    export type NavItem = {
        type: 'button' | 'separator' | 'component';
        icon?: Icon;
        shape?: 'square' | 'circle' | 'rounded';
        link?: string;
        label?: string;
        visibility?: 'mobile' | 'desktop';
        onclick?: () => void;
    };
</script>

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { mode } from 'mode-watcher';

    import type { Theme } from '$lib/utils/theme';

    import Link from '$lib/components/ui/link/Link.svelte';
    import IconButton from '$lib/components/ui/iconbutton/IconButton.svelte';

    /*--------------------------------- Props --------------------------------*/

    // TODO add "sticky" prop!

    interface NavBarProps {
        title: string;
        logo?: string;
        logoLink?: string;
        items?: NavItem[];
        themeOverride?: Theme;
        navLeft?: any;
        navRight?: any;
    }

    let {
        title,
        logo,
        logoLink,
        items = [],
        themeOverride,
        navLeft,
        navRight
    }: NavBarProps = $props();

    const navTheme: Theme = $derived(themeOverride ?? $mode ?? 'dark');

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<!-- Navbar -->
<div class={`nav nav-${navTheme}`} role="navigation" aria-label="main navigation">
    <!-- Navbar Left-Hand Side -->
    <div class="nav-left">
        {#if logo}
            <Link href={logoLink} target="_blank">
                <img src={logo} alt="logo" style="max-height:3rem" />
            </Link>
        {/if}
    </div>

    <div class="nav-left">
        <h1>{title}</h1>
        {@render navLeft?.()}
    </div>

    <!-- Navbar Right-Hand Side -->
    <div class="nav-right">
        {@render navRight?.()}
        {#each items as item}
            <div
                class:mobile={item.visibility === 'mobile'}
                class:desktop={item.visibility === 'desktop'}
            >
                {#if item.type === 'button' && item.icon}
                    <Link href={item.link}>
                        <IconButton
                            variant="ghost"
                            label={item.label}
                            Icon={item.icon}
                            shape={item.shape}
                            onclick={item.onclick}
                        />
                    </Link>
                {/if}

                {#if item.type === 'separator'}
                    <div class="separator">.</div>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    /* Navbar Styling */
    .nav {
        flex: 0 0 auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        z-index: 20;
    }

    .nav-left {
        flex: 0 0 auto;
        margin-right: 4px;
        padding: 0.3rem;
    }

    .nav-right {
        padding: 0.3rem;
        display: flex;
        width: auto;
        justify-content: flex-end;
        align-items: center;
        flex: 1 0 auto;
        gap: 0.3rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: 100;
        vertical-align: middle;
        margin-bottom: 0rem;
        letter-spacing: normal;
    }

    .separator {
        margin-left: 0.15rem;
        margin-right: 0.15rem;
        width: 1px;
        line-height: 2.7rem;
        color: transparent;
    }

    .nav-light {
        background-color: var(--background-light-accent);

        h1,
        :global(svg) {
            color: var(--foreground-light);
        }

        .separator {
            background-color: var(--foreground-light);
        }
    }

    .nav-dark {
        background-color: var(--background-dark-accent);

        h1,
        :global(svg) {
            color: var(--foreground-dark);
        }

        .separator {
            background-color: var(--foreground-dark);
        }
    }

    /* Breakpoints */
    .mobile {
        display: none;
    }

    .desktop {
        display: block;
    }

    @media screen and (max-width: 768px) {
        .mobile {
            display: block;
        }
        .desktop {
            display: none;
        }
    }
</style>
