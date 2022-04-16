<script lang="ts">
	import { onMount } from "svelte";

	let container: HTMLElement;

	export let global = false;

	onMount(() => {
		if(global) {
			document.body.classList.add("line-numbers");
		}

		let el = container;
		while(el && el.nextElementSibling?.nodeName !== "PRE") {
			el = el.nextElementSibling as HTMLElement;
		}

		el.nextElementSibling.classList.add("line-numbers");
	});
</script>

<div bind:this={container} />
