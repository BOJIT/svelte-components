<!--
 * @file ThemeSelector.svelte
 * @author James Bennion-Pedley
 * @brief Theme Selector Overlay (default if not embedded in a menu)
 * @date 27/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { Component } from 'svelte';

    import { setMode, userPrefersMode } from 'mode-watcher';
    import { Light, Moon, BrightnessContrast, type CarbonIconProps } from 'carbon-icons-svelte';

    import type { ThemeMode } from '$lib/components/App.svelte';

    import * as Dialog from '$lib/components/ui/dialog/index.js';

    import Button from '$lib/components/ui/button/button.svelte';

    /*--------------------------------- Types --------------------------------*/

    interface ThemeSelectorProps {
        visible?: boolean;
        keybinding?: string;
        embedded?: boolean;
    }

    type ThemeIcon = {
        mode: ThemeMode;
        icon: Component<CarbonIconProps>;
    };

    /*--------------------------------- Props --------------------------------*/

    let { visible = $bindable(false), keybinding = 'k' }: ThemeSelectorProps = $props();

    const themes: ThemeIcon[] = [
        {
            mode: 'light',
            icon: Light
        },
        {
            mode: 'dark',
            icon: Moon
        },
        {
            mode: 'system',
            icon: BrightnessContrast
        }
    ];

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<svelte:window
    on:keydown={(event: KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key === keybinding) {
            visible = true;
        } else if (event.key === 'Enter') {
            if (visible) {
                visible = false;
            }
        } else if ((!event.shiftKey && event.key === 'Tab') || event.key === 'ArrowRight') {
            if (visible) {
                const idx = themes.findIndex((t) => t.mode === $userPrefersMode);
                let i = idx === themes.length - 1 ? 0 : idx + 1;
                setMode(themes[i].mode);
            }
        } else if ((event.shiftKey && event.key === 'Tab') || event.key === 'ArrowLeft') {
            if (visible) {
                const idx = themes.findIndex((t) => t.mode === $userPrefersMode);
                let i = idx === 0 ? themes.length - 1 : idx - 1;
                setMode(themes[i].mode);
            }
        } else return;

        event.preventDefault();
    }}
/>

<Dialog.Root bind:open={visible}>
    <Dialog.Content showClose={false}>
        <Dialog.Description>
            <div class="option">
                {#each themes as t, i}
                    <Button
                        variant={t.mode === $userPrefersMode ? 'default' : 'ghost'}
                        onclick={() => {
                            setMode(t.mode);
                        }}
                    >
                        <t.icon size={32} />
                    </Button>
                {/each}
            </div>
        </Dialog.Description>
    </Dialog.Content>
</Dialog.Root>

<style>
    .option {
        display: flex;
        gap: 1rem;
        justify-content: center;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .option :global(button):focus {
        visibility: hidden;
    }
</style>
