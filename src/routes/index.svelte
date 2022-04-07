<script lang="ts">
	import {
		TextField,
		RadioButtonGroup,
		AppBar
	} from "$lib/smelte";

	import theme, { palette } from "$lib/theme";
	const mode = theme.Mode;

	theme.init(palette.evergreen);

</script>

<style>
	h3, h6 {
		padding: 1rem;
	}
</style>

<AppBar />

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
