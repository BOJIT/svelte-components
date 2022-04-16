<script lang="ts">
	import "$lib/global.css";
	import type { Palette } from "$lib/theme/theme";
	import uiTheme, { palette } from "$lib/theme";
	import SplashScreen from "$lib/core/SplashScreen/SplashScreen.svelte";
	import Notification from "../Notification/Notification.svelte";

	/* Code highlighting - with some example languages */
	import "$lib/widgets/CodeBlock/CodeLight.css";
	import "$lib/widgets/CodeBlock/CodeDark.css";
	import "prismjs/prism.js";
	import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';
	import "prismjs/components/prism-bash.js";
	import "prismjs/components/prism-c.js";
	import "prismjs/components/prism-cpp.js";
	import "prismjs/components/prism-json.js";
	import "prismjs/components/prism-python.js";

	export let theme: Palette = null;
	export let load: null | ((resolve: (value: unknown) => void,
								reject: (reason?: any) => void) => {}) = null;

	async function loadCheck(resolve, reject) {
		// Set theme
		if(theme !== null) {
			uiTheme.init(theme);
		} else {
			uiTheme.init(palette.midnight);	// Default Theme
		}

		if(load !== null) {
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

<SplashScreen load={loadCheck}/>
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
