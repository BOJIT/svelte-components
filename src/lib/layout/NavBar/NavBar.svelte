<script lang="ts" context="module">
	export type NavItem = {
		type: "button" | "separator" | "component",
		icon?: string,
		outlined?: boolean,
		shape?: "square" | "circle" | "lozenge",
		color?: string,
		visibility?: "mobile" | "desktop"
		callback?: (() => void)
	}
</script>

<script lang="ts">
	import theme from "$lib/theme";
	import Button from "$lib/smelte/components/Button/Button.svelte";

	export let title = "App Title";
	export let logo = null;
	export let logoLink = null;

	export let items: NavItem[] = [];
</script>

<!-- Navbar -->
<div class="nav" role="navigation" aria-label="main navigation"
	class:bg-primary-50={$theme == 'light'}
	class:bg-dark-700={$theme == 'dark'}>

	<!-- Navbar Left-Hand Side -->
	<div class="nav-left">
		{#if logo !== null}
			{#if logoLink !== null}
				<a href="{logoLink}" target="_blank">
					<img src="{logo}" alt="logo" style="max-height:3rem">
				</a>
			{:else}
				<img src="{logo}" alt="logo" style="max-height:3rem">
			{/if}
		{/if}
	</div>

	<div class="nav-left">
		<h1 class:dark={$theme == 'dark'}>{title}</h1>
	</div>

	<!-- Navbar Right-Hand Side -->
	<div class="nav-right">
		{#each items as item}
			<div class:mobile={item.visibility === "mobile"} class:desktop={item.visibility === "desktop"}>
				{#if item.type === "button"}
				<Button lozenge={(item.shape === "lozenge") || (item.shape === undefined)}
						square={item.shape === "square"}
						circle={item.shape === "circle"}
						transparent={item.color === "transparent"}
						iconColor={item.color === "transparent" ? (
							$theme == 'dark' ? "var(--color-white)" : "var(--color-dark-500)")
							: ""}
						outlined={item.outlined}
						iconSize={"2rem"}
						color={item.color}
						icon={item.icon !== undefined ? item.icon : "settings"}
						on:click={item.callback}
				/>
				{/if}

				{#if item.type === "separator"}
				<div class="separator" class:dark={$theme == 'dark'}>.</div>
				{/if}
			</div>
		{/each}
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
		margin-right: 4px;
		padding: 0.3rem;
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
		vertical-align: middle;
		margin-bottom: 0rem;
		letter-spacing: normal;
		color: var(--color-dark-500);
	}

	.nav-left > h1.dark {
		color: var(--color-gray-300);
	}

	.separator {
		margin-left: 0.15rem;
		margin-right: 0.15rem;
		width: 1px;
		line-height: 2.7rem;
		color: transparent;
		background-color: var(--color-dark-500);
	}

	.separator.dark {
		background-color: var(--color-gray-300);
	}

	/* Breakpoints */

	.mobile {
		display: none;
	}

	.desktop {
		display: block;
	}

	@media screen and (max-width: 768px) {
		.mobile {
			display: block;
		}
		.desktop {
			display: none;
		}
	}
</style>
