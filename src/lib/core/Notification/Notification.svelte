<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	/* Popup Overlays */
	type Popup = {
		title: string,
		message: string,
		type: "info" | "warning" | "error"
		timeout?: number
		uid?: number
	}

	const store = writable([]);   // Array of message popups
	let popup_uid = 1;

	function reset() {
		store.set([])
	}

	function close(uid: number) {
		store.update((popups) => {
			return popups.filter(t => t.uid !== uid);
		});
	}

	function push(entry: Popup) {
		store.update((popups) => {
			entry.uid = popup_uid++;
			popups = [entry, ...popups];
			/* Auto-remove from store if timeout specified */
			if("timeout" in entry) {
				setTimeout(() => close(entry.uid), entry.timeout*1000);
			}
			return popups;
		});
	}

	const message = {
		subscribe: store.subscribe,
		set: store.set,
		reset: reset,
		close: close,
		push: push
	}

	export { message };
</script>

<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import Icon from "$lib/smelte/components/Icon/Icon.svelte";
	import Button from '$lib/smelte/components/Button/Button.svelte';
	import theme from "$lib/theme";
</script>

<div class="container">
	{#each $message as entry (entry.uid)}
		<div in:fly="{{ x:-500, delay: 300 }}" out:fade animate:flip
				class="popup"
				class:dark={$theme == 'dark'}
				class:is-info="{entry.type === "info"}"
				class:is-warning="{entry.type === "warning"}"
				class:is-error="{entry.type === "error"}">
			<div class="popup-icon">
				{#if entry.type === "info"}
					<Icon size={"2.5rem"} outlined>info</Icon>
				{:else if entry.type === "warning"}
					<Icon size={"2.5rem"} outlined>warning_amber</Icon>
				{:else if entry.type === "error"}
					<Icon size={"2.5rem"} outlined>error_outline</Icon>
				{/if}
			</div>
			<div class="popup-message transition">
				<h3>{entry.title}</h3>
				<p>{entry.message}</p>
			</div>
			<div class="popup-delete">
				<Button on:click={() => message.close(entry.uid)}
					icon={"cancel"} transparent circle small
					iconColor={$theme == 'dark' ? "var(--color-white)" : "var(--color-dark-500)"}></Button>
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		position: fixed;
		height: 7em;    /* TODO make dependent on message height + a bit */
		width: 30em;
		bottom: 0;
		left: 0;
		pointer-events: none;
		padding: 0.5rem;
		overflow: hidden;
	}

	@media screen and (max-width: 768px) {
		.container {
			width: 100%;
		}
	}

	.popup {
		width: 100%;
		margin-bottom: 0.5rem !important;
		display: flex;
		align-items: center;
		pointer-events: auto;
		border-radius: 0.5rem;
		padding: 0.2rem;
		box-shadow: 0.5px 0.5px 1px var(--color-black-trans-dark);
	}

	.popup-icon {
		flex: 0 0 auto;
		padding: 0.4rem;
		margin-left: 0.4rem;
		vertical-align: middle;
		line-height: 100%;
	}

	.popup-message {
		flex: 1 0 auto;
		padding: 0.5rem;
		vertical-align: middle;
		margin-top: 0.3rem;
	}

	.popup-message h3 {
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1;
	}

	.popup-message p {
		line-height: 2;
	}

	.popup-delete {
		flex: 0 0 auto;
		align-self: flex-start;
	}

	.is-info {
		background-color: var(--color-blue-300);
	}

	.is-info.dark {
		background-color: var(--color-blue-500);
	}

	.is-warning {
		background-color: var(--color-alert-200);
	}

	.is-warning.dark {
		background-color: var(--color-alert-400);
	}

	.is-error {
		background-color: var(--color-error-300);
	}

	.is-error.dark {
		background-color: var(--color-error-500);
	}
</style>
