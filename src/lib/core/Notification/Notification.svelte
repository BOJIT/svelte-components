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

	// import notification from 'store/notification';

	// import Icon from 'svelte-awesome';
	// import { faInfo, faExclamationTriangle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="container">
	{#each $message as entry (entry.uid)}
		<div in:fly="{{ x:-500, delay: 300 }}" out:fade animate:flip
				class="popup"
				class:is-info="{entry.type === "info"}"
				class:is-warning="{entry.type === "warning"}"
				class:is-danger="{entry.type === "error"}">
			<button on:click={() => message.close(entry.uid)} class="delete"></button>
			<span class="icon popup-icon">
				<div>
					<!-- {#if entry.type === "info"}
						<Icon data={faInfo} scale={1.4} />
					{:else if entry.type === "warning"}
						<Icon data={faExclamationTriangle} scale={1.4} />
					{:else if entry.type === "error"}
						<Icon data={faTimesCircle} scale={1.4} />
					{/if} -->
				</div>
			</span>
			<div class="popup-message">
				<h3>{entry.title}</h3>
				<p>{entry.message}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		position: absolute;
		height: 8em;    /* TODO make dependent on message height + a bit */
		width: 30em;
		bottom: 0;
		left: 0;
		pointer-events: none;
		padding: 0.5rem;
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
		pointer-events: auto;
		z-index: 100;
		border-radius: 0.5rem;
	}

	.popup-icon {
		flex: 0 0 auto;
		position: relative;
		margin-right: 1rem;
	}

	.popup-icon > div {
		position: absolute;
		top: 50%;
	}

	.popup-message {
		flex: 1 0 auto;
	}

	.is-info {
		background-color: var(--color-blue-500);
	}

	.is-warning {
		background-color: var(--color-alert-300);
	}

	.is-danger {
		background-color: var(--color-error-500);
	}
</style>
