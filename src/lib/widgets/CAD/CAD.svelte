<script lang="ts">
	/* You may need to add the following to your SvelteKit config:
		vite: {
			assetsInclude: ['**[backslash]*.gltf', '**[backslash]*.glb'],
		},
	*/
	import { browser } from "$app/env";

	// Need local import to treat as ES Module
	import "./model-viewer/model-viewer.min.js";

	export let geometry = null;
	export let transparent = false;
	export let aspect: string = "4:3";

	let padding = "0%";

	$: {
		let ratio = parseInt(aspect.split(':')[0]) / parseInt(aspect.split(':')[1]);
		padding = (100 / ratio).toString().concat("%");
	}
</script>

<svelte:head>
	<!-- Patch for stopping SSR breaking on model-viewer load -->
	{#if !browser }
		<script>
			var window = null;
		</script>
	{/if}
</svelte:head>

<div class="model-container" class:transparent style:padding-bottom={padding}>
	<model-viewer src={geometry ? geometry : false} camera-controls />
</div>

<style>
	model-viewer {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0; bottom: 0; left: 0; right: 0;
	}

	:global(:root) {
		--poster-color: transparent;
	}

	.model-container {
		width: 100%;
		position: relative;

		background-color: #f5f2f0;
	}

	:global(.mode-dark) .model-container {
		background-color: #2d2d2d;
	}

	.model-container.transparent {
		background-color: transparent;
	}
</style>

