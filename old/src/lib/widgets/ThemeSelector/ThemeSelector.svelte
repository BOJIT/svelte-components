<!--
 * @file ThemeSelector.svelte
 * @author James Bennion-Pedley
 * @brief Main UI
 * @date 07/02/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { SvelteComponent } from 'svelte/internal';

    import Dialog from '$lib/smelte/components/Dialog/Dialog.svelte';
    import IconButton from '$lib/form/IconButton/IconButton.svelte';

    // Icons
    import SunnyOutline from '@svicons/ionicons-outline/sunny.svelte';
    import MoonOutline from '@svicons/ionicons-outline/moon.svelte';
    import ContrastOutline from '@svicons/ionicons-outline/contrast.svelte';

    /*--------------------------------- Types --------------------------------*/

    type Theme = {
        theme: 'light' | 'dark' | 'auto';
        icon: typeof SvelteComponent;
    };

    /*--------------------------------- Props --------------------------------*/

    import Theme from '$lib/theme';
    const mode = Theme.Mode;

    let div: HTMLDivElement;

    const themes: Theme[] = [
        {
            theme: 'light',
            icon: SunnyOutline
        },
        {
            theme: 'dark',
            icon: MoonOutline
        },
        {
            theme: 'auto',
            icon: ContrastOutline
        }
    ];

    const col = 'rgba(120, 120, 120, 0.5)';
    const col_focus = 'rgba(180, 180, 180, 0.5)';

    export let active = false;
    let idx = 0;

    /*-------------------------------- Methods -------------------------------*/

    function handleKeydown(event: KeyboardEvent) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            active = true;
            setTimeout(() => {
                div.focus(); // Ensure keyboard focus is shifted
            }, 10);
        } else if (event.key === 'Escape' || event.key === 'Enter') {
            if (active) {
                event.preventDefault();
                active = false;
                div.blur();
            }
        } else if (event.key === 'Tab' || event.key === 'ArrowRight') {
            if (active) {
                event.preventDefault();
                let i = idx === themes.length - 1 ? 0 : idx + 1;
                $mode = themes[i].theme;
                idx = i;
            }
        } else if (event.key === 'ArrowLeft') {
            if (active) {
                event.preventDefault();
                let i = idx === 0 ? themes.length - 1 : idx - 1;
                $mode = themes[i].theme;
                idx = i;
            }
        }
    }

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<svelte:window on:keydown={handleKeydown} />

<Dialog bind:value={active}>
    <div class="option" bind:this={div} tabindex="-1">
        {#each themes as t, i}
            <IconButton
                icon={t.icon}
                color={$mode === t.theme ? col_focus : col}
                size="5em"
                disabled={$mode === t.theme}
                on:click={() => {
                    $mode = t.theme;
                    idx = i;
                }}
                useRipple={false}
            />
        {/each}
    </div>
</Dialog>

<style>
    .option {
        display: flex;
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
</style>
