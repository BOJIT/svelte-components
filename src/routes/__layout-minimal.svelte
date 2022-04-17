<script lang="ts">
	/* Import any used fonts here */
	import "@fontsource/gloria-hallelujah";
	import "@fontsource/nunito";
	import "@fontsource/syne-mono";

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
</script>

<App theme={palette.midnight}>
	<NavBar title="Blog Entry" logo={logo} logoLink="https://github.com/BOJIT"
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


