<script lang="ts">
    import { createEventDispatcher, type SvelteComponent } from "svelte";
    import createRipple from "$lib/smelte/components/Ripple/ripple.js";

    import Link from "$lib/core/Link/Link.svelte";
    import Tooltip from "$lib/smelte/components/Tooltip/Tooltip.svelte";

    const dispatch = createEventDispatcher();

    let ripple = createRipple("white");

    export let icon: typeof SvelteComponent<any>;
    export let href: string = null;
    export let newTab = false;
    export let disabled = false;
    export let useRipple = true;

    export let label = "label";

    // Style
    export let size: string = "2.5em";
    export let shape: "circle" | "square" | "rounded" = "rounded";
    export let color: string = "var(--color-primary-500)";
    export let iconColor: string = "white";
</script>

<Link {href} {newTab} {label}>
    {#if useRipple}
        <Tooltip active={label !== "label"}>
            <div slot="activator">
                <button
                    {disabled}
                    class="{shape} overflow-hidden"
                    class:hoverable={!disabled}
                    class:transparent={color === "transparent"}
                    style="background-color: {color}"
                    on:click={() => {
                        dispatch("click");
                    }}
                    use:ripple
                    aria-label={label}
                >
                    <svelte:component
                        this={icon}
                        height={size}
                        color={iconColor}
                    />
                </button>
            </div>
            {label}
        </Tooltip>
    {:else}
        <Tooltip active={label !== "label"}>
            <div slot="activator">
                <button
                    {disabled}
                    class="{shape} overflow-hidden"
                    class:hoverable={!disabled}
                    class:transparent={color === "transparent"}
                    style="background-color: {color}"
                    on:click={() => {
                        dispatch("click");
                    }}
                    aria-label={label}
                >
                    <svelte:component
                        this={icon}
                        height={size}
                        color={iconColor}
                    />
                </button>
            </div>
            {label}
        </Tooltip>
    {/if}
</Link>

<style>
    button {
        padding: 0.7rem;
        transition: filter 0.2s;
        transition: background-color 0.2s;
    }

    button.hoverable:hover {
        filter: brightness(160%);
    }

    button.hoverable.transparent:hover {
        background-color: #72727226 !important;
    }

    button.circle {
        border-radius: 50%;
    }

    button.square {
        border-radius: 0%;
    }

    button.rounded {
        border-radius: 0.5rem;
    }
</style>
