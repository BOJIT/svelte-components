<script>
	import "$lib/global.css";

	import theme, { palette } from "$lib/theme";
	import SplashScreen from "$lib/core/SplashScreen/SplashScreen.svelte";

	/* Example pre-page-loading routine */
	async function loadCheck(resolve, reject) {
		// Set theme
		theme.init(palette.evergreen);

		// Arbitrary delay for demo
		// await new Promise(resolve => setTimeout(resolve, 500));

		// Check browser compatibility
		if('serial' in navigator) {
			resolve();
		} else {
			reject("Web Serial API not supported in your browser!");
		}
	}
</script>

<SplashScreen load={loadCheck}/>

<!-- TODO remove top level smelte class - scope to components -->
<div class="smelte">
	<slot />
</div>
