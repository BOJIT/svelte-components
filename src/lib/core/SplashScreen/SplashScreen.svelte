<script lang="ts">
	import ProgressCircular from "../../smelte/components/ProgressCircular";

	/* Props */
</script>

<div class="splash">
	<ProgressCircular />
</div>

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
</style>
