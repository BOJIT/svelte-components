<script lang="ts">
    /**
     * @note Relative imports currently required for css files to package correctly:
     * https://github.com/sveltejs/kit/issues/1950
     */
    import '../../global.css';

    import type { Palette } from '$lib/theme/theme.js';
    import uiTheme, { palette } from '$lib/theme';
    import SplashScreen from '$lib/core/SplashScreen/SplashScreen.svelte';
    import Notification from '../Notification/Notification.svelte';

    /* Code highlighting - with some example languages */
    import '../../widgets/CodeEditor/CodeLight.css';
    import '../../widgets/CodeEditor/CodeDark.css';
    import 'prismjs/prism.js';
    import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
    import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

    export let theme: Palette = null;
    export let load:
        | null
        | ((resolve: (value: unknown) => void, reject: (reason?: any) => void) => {}) = null;

    async function loadCheck(resolve, reject) {
        // Set theme
        if (theme !== null) {
            uiTheme.init(theme);
        } else {
            uiTheme.init(palette.midnight); // Default Theme
        }

        if (load !== null) {
            try {
                await new Promise(load);
                resolve();
            } catch (err) {
                reject(err);
            }
        } else {
            resolve();
        }
    }
</script>

<SplashScreen load={loadCheck} />
<div class="app">
    <slot />
</div>
<Notification />

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
