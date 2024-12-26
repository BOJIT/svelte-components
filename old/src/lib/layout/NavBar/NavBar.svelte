<script lang="ts" context="module">
    export type NavItem = {
        type: 'button' | 'separator' | 'component';
        icon?: typeof SvelteComponent;
        shape?: 'square' | 'circle' | 'rounded';
        color?: string;
        label?: string;
        visibility?: 'mobile' | 'desktop';
        callback?: () => void;
    };
</script>

<script lang="ts">
    import type { ThemeMode } from '$lib/theme/theme';
    import theme from '$lib/theme';
    import IconButton from '$lib/form/IconButton/IconButton.svelte';
    import type { SvelteComponent } from 'svelte';

    export let title: string = 'App Title';
    export let logo: string | null = null;
    export let logoLink: string | null = null;

    export let items: NavItem[] = [];

    export let themeOverride: ThemeMode = 'auto';

    let local_theme = 'dark';
    theme.subscribe((t) => {
        local_theme = themeOverride == 'auto' ? t : themeOverride;
    });
</script>

<!-- Navbar -->
<div
    class="nav"
    role="navigation"
    aria-label="main navigation"
    class:bg-primary-50={local_theme == 'light'}
    class:bg-dark-700={local_theme == 'dark'}
>
    <!-- Navbar Left-Hand Side -->
    <div class="nav-left">
        {#if logo !== null}
            {#if logoLink !== null}
                <a href={logoLink} target="_blank" rel="noreferrer">
                    <img src={logo} alt="logo" style="max-height:3rem" />
                </a>
            {:else}
                <img src={logo} alt="logo" style="max-height:3rem" />
            {/if}
        {/if}
    </div>

    <div class="nav-left">
        <h1 class:dark={local_theme == 'dark'}>{title}</h1>
        <slot name="nav-left" />
    </div>

    <!-- Navbar Right-Hand Side -->
    <div class="nav-right">
        <slot name="nav-right" />
        {#each items as item}
            <div
                class:mobile={item.visibility === 'mobile'}
                class:desktop={item.visibility === 'desktop'}
            >
                {#if item.type === 'button'}
                    <IconButton
                        color={item.color}
                        icon={item.icon}
                        size="1.7rem"
                        shape={item.shape}
                        label={item.label ? item.label : 'label'}
                        iconColor={local_theme == 'dark'
                            ? 'var(--color-white)'
                            : 'var(--color-dark-500)'}
                        on:click={item.callback}
                    />
                {/if}

                {#if item.type === 'separator'}
                    <div class="separator" class:dark={local_theme == 'dark'}>.</div>
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

    .nav-left > h1 {
        font-size: 2rem;
        font-weight: 100;
        vertical-align: middle;
        margin-bottom: 0rem;
        letter-spacing: normal;
        color: var(--color-dark-500);
    }

    .nav-left > h1.dark {
        color: var(--color-gray-300);
    }

    .separator {
        margin-left: 0.15rem;
        margin-right: 0.15rem;
        width: 1px;
        line-height: 2.7rem;
        color: transparent;
        background-color: var(--color-dark-500);
    }

    .separator.dark {
        background-color: var(--color-gray-300);
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
