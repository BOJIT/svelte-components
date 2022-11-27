<script lang=ts>
    import { onMount } from "svelte";

    import { Terminal } from "$lib/widgets";

    let terminal: SvelteComponent;
</script>

# Terminal

This is a built-in serial terminal widget: it uses the Web Serial API

<Terminal />
