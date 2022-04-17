<script lang="ts">
	// Uses the Prism JS syntax highlighter. When using mdsvex,
	// the syntax highlighters should be included automatically.
	// When using standalone, include them manually.

	import "./prism-live/prism-live.js";
	import "./prism-live/prism-live.css";

	export let language = "js";

	export let lineNumbers = false;
</script>

<!-- <pre><code class="prism-live language-{language}"><slot /></code></pre> -->
<textarea class="prism-live language-{language}" class:line-numbers={lineNumbers}></textarea>

<style>
</style>
