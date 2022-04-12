<script lang="ts">
	import App from "$lib/core/App/App.svelte";
	import Content from "$lib/layout/Content/Content.svelte";
	import NavBar from "$lib/layout/NavBar/NavBar.svelte";
	import type { NavItem } from "$lib/layout/NavBar/NavBar.svelte";
	import Main from "$lib/layout/Main/Main.svelte";
	import Footer from "$lib/layout/Footer/Footer.svelte";

	import Theme, { palette } from "$lib/theme";
	let mode = Theme.Mode;

	import logo from "$lib/test/logo.demo.png";

	function toggleTheme() {
		if($mode == 'light')
			$mode = 'dark';
		else
			$mode = 'light';
	}

	let items: NavItem[] = [
		{
			type: "button",
			color: "transparent",
			icon: "light_mode",
			callback: toggleTheme
		},
	];

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
	<NavBar title="ploTTY" logo={logo} logoLink="https://github.com"
		items={items}/>

	<Main>
		<Content>
			<slot />
		</Content>
	</Main>

	<Footer buttons={[
		{
			icon: "account_circle",
			shape: "circle",
		},
		{
			label: "",
			icon: "settings",
			shape: "circle"
		},
		{
			label: "",
			icon: "delete"
		},
	]}/>
</App>


