<script lang="ts">
	import { onMount } from "svelte";

	let container: HTMLElement;

	export let global = false;

	onMount(() => {
		if(global) {
			document.body.classList.add("line-numbers");
		}
		container.nextElementSibling.classList.add("line-numbers");
	});
</script>

<div bind:this={container} />
