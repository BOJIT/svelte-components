<!--
 * @file App.svelte
 * @author James Bennion-Pedley
 * @brief Main top level wrapper for all apps
 * @date 26/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { ModeWatcher } from 'mode-watcher';

    import { Toaster } from '$lib/components/ui/sonner/index.js';
    import ThemeSelector from '$lib/components/widgets/ThemeSelector/ThemeSelector.svelte';

    /*--------------------------------- Types --------------------------------*/

    interface AppProps {
        children: any;
        defaultMode?: 'light' | 'dark' | 'system';
        bindThemeToKey?: string | undefined;
    }

    /*--------------------------------- Props --------------------------------*/

    let { children, defaultMode, bindThemeToKey }: AppProps = $props();

    let visible: boolean = $state(false);

    /*-------------------------------- Methods -------------------------------*/

    export function launchThemeSelector() {
        visible = true;
    }

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<ModeWatcher darkClassNames={['dark']} {defaultMode} />
<ThemeSelector keybinding={bindThemeToKey} bind:visible />
<Toaster position="bottom-left" richColors closeButton expand duration={100000} />
<div>
    {@render children?.()}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
