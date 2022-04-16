<script lang="ts">
	import Button from "$lib/smelte/components/Button/Button.svelte";
	import { message } from "$lib/core/Notification/Notification.svelte";
	import { onMount } from "svelte";

	let container: HTMLElement;
	let button: HTMLElement;
	let code: HTMLElement;

	function copyCode() {
		navigator.clipboard.writeText(code.textContent);
		message.push({
			type: "info",
			title: "Text Copied!",
			message: "Text copied to clipboard",
			timeout: 3,
		});
	}

	onMount(() => {
		let pre: HTMLElement = undefined;
		let el = container;
		while(el && el.nextElementSibling?.nodeName !== "PRE") {
			el = el.nextElementSibling as HTMLElement;
		}

		if(el.nextElementSibling?.nodeName !== "PRE") {
			return;	// No code block found
		} else {
			pre = el.nextElementSibling as HTMLElement;
		}

		code = pre.getElementsByTagName('code')[0];

		if(button.parentElement.nodeName !== "PRE") {
			pre.style.position = "relative";
			pre.insertBefore(button, pre.firstChild);
		}
	});
</script>

<div bind:this={container}>
	<div bind:this={button} class="button">
		<Button icon="content_copy" iconColor={"var(--color-gray-500)"}
			lozenge transparent on:click={copyCode}/>
	</div>
</div>

<style>
	.button {
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
	}
</style>
``
