<script lang="ts">
	/* Custom Scrollbar */
	import 'simplebar';
	import 'simplebar/dist/simplebar.css';

	import createRipple from "$lib/smelte/components/Ripple/ripple.js";

	import theme from "$lib/theme";
import Button from '$lib/smelte/components/Button/Button.svelte';

	const ripple = createRipple("white");

	/* Callback for tab click event */
	function handleClick(idx) {
		index = idx;
	}

	/* Array of panel objects - see template above for structure */
	export let tabs : string[];

	// export let enclosed = false;

	/* Keep track of current tab index */
	export let index = 0;
</script>

<div data-simplebar>
	<ul class="tabs">
		<!-- Render each tab - updates when the list updates -->
		{#each tabs as tab, idx}
			<li class="tab transition" class:is-active={idx == index}
			on:click={() => handleClick(idx)} href="{void(0)}">
				<h6>{tab}</h6>
			</li>
		{/each}
	</ul>
	<hr class="tabline">
</div>

<style>
	.tabs {
		/* flex: 0 0 auto; */
		overflow-x: scroll;
		scrollbar-width: none;
		display: flex;
		gap: 0.3rem;
		padding: 0.3rem;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	.tabline {
		margin: 0rem 0.3rem;
		border-color: teal;
	}

	.tab {
		padding: 0.2rem 0.6rem;
		border-radius: 0.5rem;
		background-color: darkgray;
	}

	.tab:hover {
		background-color: gray;
	}

	.tab.is-active {
		background-color: teal;
	}

</style>
