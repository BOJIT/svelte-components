<script lang="ts">
	import theme from "$lib/theme";

	import Button from "$lib/smelte/components/Button/Button.svelte";

	export let title = "App Title";
	export let logo = null;
	export let logoLink = null;
</script>

<!-- Navbar -->
<div class="nav" role="navigation" aria-label="main navigation"
	class:bg-primary-300={$theme == 'light'}
	class:bg-dark-700={$theme == 'dark'}>

	<!-- Navbar Left-Hand Side -->
	<div class="nav-left">
		{#if logo !== null}
			{#if logoLink !== null}
				<a href="{logoLink}" target="_blank">
					<img src="{logo}" alt="logo" style="max-height:3.2rem">
				</a>
			{:else}
				<img src="{logo}" alt="logo" style="max-height:3.2rem">
			{/if}
		{/if}
	</div>

	<div class="nav-left">
		<h1>{title}</h1>
	</div>

	<!-- Navbar Right-Hand Side -->
	<div class="nav-right">
		<Button icon="settings" lozenge color="null"></Button>
		<Button icon="settings" lozenge color="null"></Button>
		<Button icon="settings" lozenge color="null"></Button>
	</div>
</div>

<style>
	/* Navbar Styling */
	.nav {
		flex: 0 0 auto;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		z-index: 20;
	}

	.nav-left {
		flex: 0 0 auto;
		margin-left: 4px;
		margin-right: 4px;
	}

	.nav-right {
		padding: 0.3rem;
		display: flex;
		width: auto;
		justify-content: flex-end;
		align-items: center;
		flex: 1 0 auto;
		gap: 0.3rem;
	}

	.nav-left > h1 {
		font-size: 2rem;
		font-weight: 100;
		font-family: "comfortaa";
		vertical-align: middle;
		margin-bottom: 0rem;
		letter-spacing: normal;
	}
</style>
