<script lang="ts">
	import theme from "$lib/theme";
</script>

<!-- Navbar -->
<div class="nav" role="navigation" aria-label="main navigation"
	class:bg-primary-200={$theme == 'light'}
	class:bg-primary-700={$theme == 'dark'}>

	<!-- Navbar Left-Hand Side -->
	<div class="nav-left">
		<h1>Left Header</h1>
	</div>

	<!-- Navbar Right-Hand Side -->
	<div class="nav-right">
		<!-- Settings -->
		<h1>Right Header</h1>
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
		display: flex;
		width: auto;
		justify-content: flex-end;
		align-items: center;
		flex: 1 0 auto;
	}

	.nav h1 {
		font-size: 1.75rem;
		font-weight: 50;
		vertical-align: middle;
		margin-bottom: 0rem;
	}
</style>
