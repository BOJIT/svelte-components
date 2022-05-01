<script lang="ts">
	/* Custom Scrollbar */
	import 'simplebar';
	import 'simplebar/dist/simplebar.css';

	import theme from "$lib/theme";

	/* Callback for tab click event */
	function handleClick(idx: number) {
		index = idx;

		// Update tabline
		tabline.removeAttribute('style');
		tabline.style.cssText = theme.swatchColor(idx);
	}

	/* Array of panel objects - see template above for structure */
	export let tabs : string[];

	// export let enclosed = false;

	/* Keep track of current tab index */
	export let index = 0;

	let tabline: HTMLElement;
</script>

{#await theme.ready(1000) then value}
<div data-simplebar>
	<ul class="tabs">
		<!-- Render each tab - updates when the list updates -->
		{#each tabs as tab, idx}
			<li style={theme.swatchColor(idx)} class="tab transition" class:is-active={idx == index}
			on:click={() => handleClick(idx)} href="{void(0)}">
				<h6>{tab}</h6>
			</li>
		{/each}
	</ul>
	<hr bind:this={tabline} class="tabline transition" style={theme.swatchColor(index)}>
</div>
{/await}

<style>
	.tabs {
		overflow-x: scroll;
		scrollbar-width: none;
		display: flex;
		gap: 0.3rem;
		padding: 0.3rem;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	.tab {
		padding: 0.2rem 0.6rem;
		border-radius: 0.5rem;
		background-color: var(--color-gray-400);
	}

	:global(.mode-dark) .tab {
		background-color: var(--color-gray-700);
	}

	.tab:hover {
		background-color: var(--color-gray-500);
	}

	:global(.mode-dark) .tab:hover {
		background-color: var(--color-gray-600);
	}

	.tab.is-active {
		background-color: var(--color-swatch-base-light);
		color: var(--color-swatch-text-light);
	}

	:global(.mode-dark) .tab.tab.is-active {
		background-color: var(--color-swatch-base-dark);
		color: var(--color-swatch-text-dark);
	}

	.tabline {
		border-color: var(--color-swatch-base-light);
	}

	:global(.mode-dark) .tabline {
		border-color: var(--color-swatch-base-dark);
	}
</style>
