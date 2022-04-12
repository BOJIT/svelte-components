<script lang="ts">
	import App from "$lib/core/App/App.svelte";
	import NavBar from "$lib/layout/NavBar/NavBar.svelte";
	import Main from "$lib/layout/Main/Main.svelte";
	import Footer from "$lib/layout/Footer/Footer.svelte";

	import { palette } from "$lib/theme";

	import logo from "/static/icon_x128.png";

	/* Example pre-page-loading routine */
	async function loadCheck(resolve, reject) {
		// Check browser compatibility
		if('serial' in navigator) {
			resolve();
		} else {
			reject("Web Serial API not supported in your browser!");
		}
	}
</script>

<App theme={palette.midnight} load={loadCheck}>
	<NavBar title="ploTTY" logo={logo} logoLink="https://github.com"/>

	<Main>
		<slot />
	</Main>

	<Footer buttons={[
		{
			label: "A1",
			icon: "account_circle",
			shape: "lozenge",
			callback: () => {
				console.log("HEY");
			}
		},
		{
			label: "B1",
			icon: "settings",
			shape: "lozenge"
		},
		{
			label: "C1",
			icon: "delete"
		},
	]}/>
</App>


