<script>
    import Icon from "../Icon";
    import Ripple from "../Ripple";
    import Label from "../Checkbox/Label.svelte";
    import { ClassBuilder } from "../../utils/classes.js";

    const classesDefault =
        "inline-flex block items-center mb-2 cursor-pointer z-0";

    export let selected = "";
    export let label = "";
    export let color = "primary";
    export let disabled = false;
    export let name = "";
    export let value = "";
    export let classes = classesDefault;
    export let small = false;
    export let labelClasses = (i) => i;

    function select() {
        if (disabled) return;

        selected = value;
    }

    const cb = new ClassBuilder(classes, classesDefault);
    $: c = cb
        .flush()
        .add(classes, true, classesDefault)
        .add($$props.class)
        .get();

    $: rippleColor = value && !disabled ? color : "gray";
</script>

<div class={c} on:click={select} on:keydown={select}>
    <input
        aria-label={label}
        class="hidden"
        type="radio"
        {disabled}
        {name}
        selected={selected === value}
    />
    <div class="relative">
        <Ripple color={rippleColor}>
            {#if selected === value}
                <Icon {small} class="text-{disabled ? 'gray' : color}-500">
                    radio_button_checked
                </Icon>
            {:else}
                <Icon
                    {small}
                    class={disabled
                        ? "text-gray-500 dark:text-gray-600"
                        : "text-gray-600"}
                >
                    radio_button_unchecked
                </Icon>
            {/if}
        </Ripple>
    </div>
    <slot name="label">
        <Label {disabled} {label} class={labelClasses} />
    </slot>
</div>
