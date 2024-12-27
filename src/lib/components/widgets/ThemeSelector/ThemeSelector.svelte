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

    import * as Dialog from '$lib/components/ui/dialog/index.js';

    /*--------------------------------- Types --------------------------------*/

    interface ThemeSelectorProps {
        visible?: boolean;
        keybinding?: string;
        embedded?: boolean;
    }

    /*--------------------------------- Props --------------------------------*/

    let { visible = $bindable(false), keybinding = 'k' }: ThemeSelectorProps = $props();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<svelte:window
    on:keydown={(event: KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key === keybinding) {
            event.preventDefault();
            visible = true;
            setTimeout(() => {
                // div.focus(); // Ensure keyboard focus is shifted
            }, 10);
        }
    }}
/>

<Dialog.Root bind:open={visible}>
    <Dialog.Content showClose={false}>
        <Dialog.Header>
            <!-- <Dialog.Title>Are you sure absolutely sure?</Dialog.Title> -->
            <Dialog.Description>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
            </Dialog.Description>
        </Dialog.Header>
    </Dialog.Content>
</Dialog.Root>
