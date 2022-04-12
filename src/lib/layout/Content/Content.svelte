<script lang="ts">

</script>

<article>
	<slot/>
</article>

<style>
	/* Desktop article adjustments */
	article {
		width: 1000px;
		margin: 0 auto;
		margin-top: 1rem;
		box-sizing: border-box;
		padding: 0 10px;
	}

	/* Tablet article adjustments */
	@media (max-width: 1200px) {
		article {
			width: 768px;
		}
	}

/* Mobile article adjustments */
	@media (max-width: 768px) {
		article {
			width: 100%;
		}
	}
</style>
