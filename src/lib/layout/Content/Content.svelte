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
		margin-bottom: 2rem;
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

	/*---------------------------- Article Styling ---------------------------*/

	/* Text */
	article :global(h1),
	article :global(h2),
	article :global(h3),
	article :global(h4),
	article :global(h5),
	article :global(h6) {
		margin-top: 24px;
		margin-bottom: 16px;
		line-height: 1.25;
	}

	article :global(h1) {
		font-weight: 500;
		font-size: 2.5em;
	}

	article :global(h2) {
		font-weight: 500;
		font-size: 1.5em;
	}

	article :global(h3) {
		font-weight: 200;
		font-size: 1.25em;
	}

	article :global(h4) {
		font-weight: 200;
		font-size: 1em;
	}

	article :global(h5) {
		font-weight: 200;
		font-size: 0.875em;
	}

	article :global(h6) {
		font-weight: 200;
		font-size: 0.85em;
	}

	article :global(p) {
		margin-top: 0;
		margin-bottom: 10px;
	}

	/* Links */
	article :global(a) {
		color: #237094;
	}

	:global(.mode-dark) article :global(a) {
		color: #95b4c2;
	}

	article :global(a:visited) {
		color: #6d4085;
	}

	:global(.mode-dark) article :global(a):visited {
		color: #907b9c;
	}

	article :global(a:hover) {
		text-decoration: underline;
	}

	/* Inline Code */
	article :global(:not(pre) > code) {
		border-radius: .125rem;
		font-size: .875rem;
		padding: .15rem .3rem;
		--tw-text-opacity: 1;
		letter-spacing: .25px;
		background-color: var(--color-primary-trans-dark);
		color: var(--color-primary-900);
		font-family: var(--font-monospace);
	}

	:global(.mode-dark) article :global(:not(pre) > code) {
		background-color: var(--color-primary-trans-light);
		color: var(--color-primary-200);
		font-family: var(--font-monospace);
	}

	/* Block Code overrides */
	article > :global(pre[class*="language-"]) {
		border-radius: 0.5em;
	}

	article  > :global(div > pre[class*="language-"]) {
		border-radius: 0.5em;
	}

	/* CAD Editor overrides */
	article > :global(.model-container) {
		border-radius: 0.5em;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	/* Separators */
	article :global(hr) {
		box-sizing: content-box;
		overflow: hidden;
		background: transparent;
		border-bottom: 1 solid var(--color-gray-900);
		background-color: var(--color-gray-50);
		height: .25em;
		padding: 0;
		margin: 24px 0;
	}

	:global(.mode-dark) article :global(hr) {
		border-bottom: 1 solid var(--color-gray-50);
		background-color: var(--color-gray-900);
	}

	/* Lists */
	article :global(ul),
	article :global(ol) {
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 2em;
	}

	article :global(ul) {
		list-style-type: circle;
	}

	article :global(ol) {
		list-style-type: decimal;
	}

	article :global(ul ol),
	article :global(ol ol) {
		list-style-type: lower-roman;
	}

	article :global(ul ul ol),
	article :global(ul ul ol),
	article :global(ul ol ol),
	article :global(ol ol ol) {
		list-style-type: lower-alpha;
	}
</style>
