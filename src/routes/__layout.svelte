<script lang="ts">
	import App from "$lib/core/App/App.svelte";
	import NavBar from "$lib/layout/NavBar/NavBar.svelte";
	import type { NavItem } from "$lib/layout/NavBar/NavBar.svelte";
	import Main from "$lib/layout/Main/Main.svelte";
	import Content from "$lib/layout/Content/Content.svelte";
	import Footer from "$lib/layout/Footer/Footer.svelte";

	import { palette } from "$lib/theme";

	import logo from "$lib/test/logo.demo.png";

	let items: NavItem[] = [
		{
			type: "button",
			color:  "success",
			icon: "play_arrow",
			// outlined: true,
		},
		{
			type: "button",
			color:  "alert",
			icon: "bar_chart",
			// outlined: true,
		},
		{
			type: "separator",
			visibility: "desktop",
		},
		{
			type: "button",
			color: "transparent",
			icon: "note_add",
			visibility: "desktop",
		},
		{
			type: "button",
			color: "transparent",
			icon: "file_open",
			visibility: "desktop",
		},
		{
			type: "button",
			color: "transparent",
			icon: "file_copy",
			visibility: "desktop",
		},
		{
			type: "separator",
		},
		{
			type: "button",
			color: "transparent",
			icon: "tune",
			visibility: "desktop",
		},
		{
			type: "button",
			color: "transparent",
			icon: "menu",
			visibility: "mobile",
		},
	];
</script>

<App theme={palette.midnight}>
	<NavBar title="ploTTY" logo={logo} logoLink="https://github.com"
		items={items}/>

	<Main>
		<Content>
			<slot />
		</Content>
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


