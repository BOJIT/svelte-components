<script lang="ts" context="module">
	// Uses the Prism JS syntax highlighter. When using mdsvex,
	// the syntax highlighters should be included automatically.
	// When using standalone, include them manually.

	import "./prism-live.js";
	import "./prism-live.css";
</script>

<script lang="ts">
	export let language = "js";
</script>

<!-- <pre><code class="prism-live language-{language}"><slot /></code></pre> -->
<textarea class="prism-live language-{language}"></textarea>

<style>
</style>
