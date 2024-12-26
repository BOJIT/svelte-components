<script>
    export let outlined = false;
    export let size = '';
    export let small = false;
    export let xs = false;
    export let reverse = false;
    export let tip = false;
    export let color = 'default';
</script>

<i
    aria-hidden="true"
    class="{outlined
        ? 'material-icons-outlined'
        : 'material-icons'} icon select-none text-xl {$$props.class} duration-200 ease-in"
    class:reverse
    class:tip
    on:click
    class:text-base={small}
    class:text-xs={xs}
    style={(color ? `color: ${color}; ` : ' ').concat(size ? `font-size: ${size}; ` : ' ')}
>
    <slot />
</i>

<style>
    .reverse {
        transform: rotate(180deg);
    }

    .tip {
        transform: rotate(90deg);
    }
</style>
