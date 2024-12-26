<script>
    import { fade } from 'svelte/transition';
    import { quadOut, quadIn } from 'svelte/easing';

    export let opacity = 0.5;
    export let inProps = { duration: 200, easing: quadIn };
    export let outProps = { duration: 200, easing: quadOut };
</script>

<div
    class="fixed left-0 top-0 z-10 h-full w-full bg-black"
    style="opacity: {opacity}"
    in:fade|global={inProps}
    out:fade|global={outProps}
    on:click
    on:keypress
/>
