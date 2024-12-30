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

    import { setMode, userPrefersMode } from 'mode-watcher';

    import Contrast from 'carbon-icons-svelte/lib/Contrast.svelte';
    import Light from 'carbon-icons-svelte/lib/Light.svelte';
    import Moon from 'carbon-icons-svelte/lib/Moon.svelte';

    import type { ThemeMode } from '$lib/utils/theme';
    import type { Icon } from '$lib/components/icons';

    import * as Dialog from '$lib/components/ui/dialog/index.js';
    import IconButton from '$lib/components/ui/iconbutton/IconButton.svelte';

    /*--------------------------------- Types --------------------------------*/

    interface ThemeSelectorProps {
        visible?: boolean;
        keybinding?: string;
        embedded?: boolean;
    }

    type ThemeIcon = {
        mode: ThemeMode;
        icon: Icon;
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
            icon: Contrast
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
    <Dialog.Content showClose={false} class="sm:max-w-[325px]">
        <Dialog.Description>
            <div class="option">
                {#each themes as t}
                    <IconButton
                        Icon={t.icon}
                        scale={80}
                        variant={t.mode === $userPrefersMode ? 'default' : 'ghost'}
                        onclick={() => {
                            setMode(t.mode);
                        }}
                    />
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
    }

    .option :global(button):focus {
        visibility: hidden;
    }
</style>
