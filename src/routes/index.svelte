<script lang="ts">
	import NavBar from "$lib/layout/NavBar/NavBar.svelte";
	import Footer from "$lib/layout/Footer/Footer.svelte";

	import {
		TextField,
		RadioButtonGroup
	} from "$lib/smelte";

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

<br><br><hr><!----------------------------------------------------------------->
<h3>Text Fields</h3>

<h6>Basic</h6>
<TextField label="Test label" />

<!----------------------------------------------------------------------------->

<Footer buttons={[
	{
		label: "A1",
		icon: "t"
	},
	{
		label: "B1",
		icon: "tfd"
	},
]}/>
