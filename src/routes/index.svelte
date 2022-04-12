<script lang="ts">
	import Button from "$lib/smelte/components/Button/Button.svelte";

	import { message } from "$lib/core/Notification/Notification.svelte";

	import RadioButtonGroup from "$lib/smelte/components/RadioButton/RadioButtonGroup.svelte";

	import theme from "$lib/theme";
	const mode = theme.Mode;
</script>

<style>
	h3 {
		padding: 1rem;
	}
</style>

<h3>Theme</h3>

<div>
	<Button color="blue" on:click={() => {
		message.push({
			title: "Text",
			message: "find out",
			type: "info",
			timeout: 10
		});
	}}>Notify</Button>

	<Button color="alert" on:click={() => {
		message.push({
			title: "Text",
			message: "find out lorem ipsum long error message!",
			type: "warning",
		});
	}}>Warn</Button>

	<Button color="error" on:click={() => {
		message.push({
			title: "Text",
			message: "find out",
			type: "error",
		});
	}}>Error</Button>
</div>

<RadioButtonGroup
	name='Theme',
	bind:selected={$mode}
	items={[
		{ value: 'light', label: 'Light Mode' },
		{ value: 'dark', label: 'Dark Mode' },
		{ value: 'auto', label: 'Auto Mode'}
	]} />

<!----------------------------------------------------------------------------->
