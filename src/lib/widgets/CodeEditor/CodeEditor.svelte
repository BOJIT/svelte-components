<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import Button from "$lib/smelte/components/Button/Button.svelte";

	// Uses the Prism JS syntax highlighter. When using mdsvex,
	// the syntax highlighters should be included automatically.
	// When using standalone, include them manually.
	import PrismLive from "./prism-live/prism-live.js";
	import "./prism-live/prism-live.css";

	export let language = "js";
	export let lineNumbers = false;
	export let code = "";
	export let validationHook: null | ((resolve: (value: unknown) => void,
								reject: (reason?: any) => void) => {}) = null;

	let textarea: HTMLInputElement;
	let button: HTMLElement;

	let edited = false;
	let codeAtlastSave: string;

	async function codeSaved() {
		if(validationHook !== null) {
			try {
				await new Promise(validationHook);
			} catch (err) {
				// Reset code to last save
				textarea.value = codeAtlastSave;
				var event = new Event('input');

				textarea.dispatchEvent(event);
				code = textarea.value;
			}
		}

		codeAtlastSave = textarea.value;
		edited = false;
	}

	function codeChanged() {
		edited = true;
		code = textarea.value;
	}

	onMount(async () => {
		textarea.textContent = code;
		codeAtlastSave = textarea.textContent;

		await PrismLive();

		if(textarea.previousElementSibling.nodeName === "PRE") {
			let div = textarea.parentElement;
			div.style.position = "relative";
			div.appendChild(button);
		}
	});
</script>

<div bind:this={button} class="button">
	{#if edited }
		<div transition:fade>
			<Button icon="save" iconColor={"var(--color-gray-500)"}
				lozenge transparent on:click={codeSaved}/>
		</div>
	{/if}
</div>

<textarea bind:this={textarea} class="prism-live language-{language}"
	class:line-numbers={lineNumbers} on:input={codeChanged} />

<style>
	.button {
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
		z-index: 2;
	}
</style>
