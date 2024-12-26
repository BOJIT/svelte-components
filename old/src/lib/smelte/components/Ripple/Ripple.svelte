<script>
    export let color = 'primary';
    export let noHover = false;
    import createRipple from '../Ripple/ripple.js';

    $: ripple = createRipple(color, true);
    $: hoverClass = `hover:bg-${color}-transLight`;
</script>

<span
    use:ripple
    class="z-40 {$$props.class} left-0 top-0 flex items-center justify-center rounded-full p-2 {noHover
        ? ''
        : hoverClass}"
>
    <slot />
</span>

<style>
    .ripple {
        position: absolute !important;
    }
</style>
