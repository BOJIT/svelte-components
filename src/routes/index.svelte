<script lang="ts">
	import Button from "$lib/smelte/components/Button/Button.svelte";
	import Dialog from "$lib/smelte/components/Dialog/Dialog.svelte";
	import { message } from "$lib/core/Notification/Notification.svelte";
	import Tabs from "$lib/widgets/Tabs/Tabs.svelte";

	import RadioButtonGroup from "$lib/smelte/components/RadioButton/RadioButtonGroup.svelte";

	import theme from "$lib/theme";
	const mode = theme.Mode;

	let showDialog = false;
</script>

<svelte:head>
	<title>@bojit/svelte-components</title>
</svelte:head>

<Dialog bind:value={showDialog}>
	<h5 slot="title">Settings</h5>
	<div class="text-gray-700">I'm not sure about today's weather.</div>
	<div slot="actions">
	  <Button text on:click={() => showDialog = false}>Disagree</Button>
	  <Button text on:click={() => showDialog = false}>Agree</Button>
	</div>
</Dialog>

<Tabs tabs={[
	"Test",
	"Name",
	"Name",
	"Name",
	"Name",
	"Name",
	"Name",
	"Name",
	"Name",
	"Name",
	"Name",
	"Name",
	"Name",
	"Name",
]}/>

<!-- <h3>Theme</h3>

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

	<Button on:click={() => showDialog = true}>Show dialog</Button>
</div>

<RadioButtonGroup
	name='Theme',
	bind:selected={$mode}
	items={[
		{ value: 'light', label: 'Light Mode' },
		{ value: 'dark', label: 'Dark Mode' },
		{ value: 'auto', label: 'Auto Mode'}
	]} /> -->

<!----------------------------------------------------------------------------->
