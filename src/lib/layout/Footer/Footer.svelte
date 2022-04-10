<script lang="ts">
	import theme from "$lib/theme";

	type FooterButton = {
		label: string,
		icon: string,
		callback?: (() => void)
	}

	export let buttons: FooterButton[] = [];
</script>

<footer class:bg-primary-200={$theme == 'light'} class:bg-primary-700={$theme == 'dark'}>
	{#each buttons as button}
		<div class="button-label">
			<!-- <Button icon={faCrosshairs} color={theme.col.purple} on:click={() => {
			}}/> -->
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
		z-index: 20;

		/* Children */
		display: flex;
		padding: 0.7rem;
		justify-content: center;
		gap: 0.5rem;
	}

	.button-label {
		text-align: center;
	}

	p {
		margin-top: 0.2rem;
		font-size: 0.6rem;
	}
</style>
