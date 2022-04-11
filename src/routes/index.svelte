<script lang="ts">
	import NavBar from "$lib/layout/NavBar/NavBar.svelte";
	import Footer from "$lib/layout/Footer/Footer.svelte";
	import Button from "$lib/smelte/components/Button/Button.svelte";
	import RadioButtonGroup from "$lib/smelte/components/RadioButton/RadioButtonGroup.svelte";

	import theme from "$lib/theme";
	const mode = theme.Mode;
</script>

<style>
	h3, h6 {
		padding: 1rem;
	}
</style>

<NavBar />

<h3>Theme</h3>

<RadioButtonGroup
	name='Theme',
	bind:selected={$mode}
	items={[
		{ value: 'light', label: 'Light Mode' },
		{ value: 'dark', label: 'Dark Mode' },
		{ value: 'auto', label: 'Auto Mode'}
	]} />

<!----------------------------------------------------------------------------->

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
