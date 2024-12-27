<!--
 * @file App.svelte
 * @author James Bennion-Pedley
 * @brief Main top level wrapper for all apps
 * @date 26/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script module lang="ts">
    // A few useful globals
    import { toast } from 'svelte-sonner';

    export type Theme = 'light' | 'dark';
    export type ThemeMode = 'light' | 'dark' | 'system';

    type Notification = {
        title: string;
        description?: string;
        type?: 'info' | 'success' | 'warning' | 'error';
        timeout?: number;
    };

    const notifyRaw = toast;
    export { notifyRaw };

    export function notify(n: Notification) {
        switch (n.type) {
            case 'info':
                toast.info(n.title, {
                    description: n.description,
                    duration: n.timeout
                });
                break;
            case 'success':
                toast.success(n.title, {
                    description: n.description,
                    duration: n.timeout
                });
                break;
            case 'warning':
                toast.warning(n.title, {
                    description: n.description,
                    duration: n.timeout
                });
                break;
            case 'error':
                toast.error(n.title, {
                    description: n.description,
                    duration: n.timeout
                });
                break;
            default:
                toast(n.title, {
                    description: n.description,
                    duration: n.timeout
                });
                break;
        }
    }
</script>

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

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<ModeWatcher darkClassNames={['dark']} {defaultMode} />
<ThemeSelector keybinding={bindThemeToKey} />
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
