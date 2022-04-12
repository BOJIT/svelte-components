<script lang="ts">
	import theme from "$lib/theme";

	import Button from "$lib/smelte/components/Button/Button.svelte";

	type FooterButton = {
		label: string,
		icon: string,
		shape?: "lozenge" | "square" | "circle",
		callback?: (() => void)
	}

	export let buttons: FooterButton[] = [];
</script>

<footer class:bg-primary-50={$theme === 'light'} class:bg-primary-700={$theme === 'dark'}>
	{#each buttons as button}
		<div class="button-label">
			<Button icon={button.icon}
				square={button.shape === "square"}
				lozenge={button.shape === "lozenge"}
				circle={button.shape === "circle"}
				on:click={button.callback}/>
			<p>{button.label}</p>
		</div>
	{/each}
</footer>

<style>
	footer {
		/* Self */
		flex: 0 0 auto;
		align-self: end;
		width: 100%;
		/* z-index: 20; */

		/* Children */
		display: flex;
		padding: 0.7rem;
		justify-content: center;
		gap: 0.5rem;
		align-self: flex-end;
	}

	.button-label {
		text-align: center;
	}

	p {
		margin-top: 0.2rem;
		font-size: 0.6rem;
	}
</style>
