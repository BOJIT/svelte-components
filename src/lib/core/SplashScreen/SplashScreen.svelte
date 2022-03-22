<script lang="ts">
	/* Imports */
	import { onMount } from "svelte";
	import { fade } from 'svelte/transition';
	import { browser } from '$app/env';
	import ProgressCircular from "../../smelte/components/ProgressCircular";
	import Icon from "../../smelte/components/Icon";

	/* Props */
	export let fgColor = "#7783a8";
	export let bgColor = "#303233";
	export let load: null | ((resolve: (value: unknown) => void,
								reject: (reason?: any) => void) => {}) = null;

	let visible: boolean = true;
	let error: boolean = false;
	let errorMessage: string = "";

	onMount(async () => {
		if(browser) {
			if(load !== undefined) {
				try {
					await new Promise(load);
					visible = false;
				} catch (err) {
					console.error(err);
					errorMessage = err;
					error = true;
				}
			}
		} else {
			// Hide for SSR
			visible = false;
		}
	});
</script>

{#if visible}
	<div transition:fade="{{duration: 200}}" class="splash" style="background-color: {bgColor}">
		{#if error}
			<div transition:fade="{{delay: 100}}" class="error-message">
				<Icon color="gray" size={"3rem"}>{"warning"}</Icon>
				<h5>Error: {errorMessage}</h5>
			</div>
		{:else}
			<ProgressCircular rawColor={fgColor}/>
		{/if}
	</div>
{/if}

<style>
	.splash {
		/* Parent */
		position: absolute;
		z-index: 200;
		width: 100%;
		height: 100%;

		/* Child */
		display: grid;
		place-items: center;
	}

	.error-message {
		text-align: center;
		padding: 1rem;
	}

	.error-message h5 {
		color: gray;
	}
</style>
