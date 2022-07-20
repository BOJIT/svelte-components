<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import createRipple from "$lib/smelte/components/Ripple/ripple.js";

    import Link from '$lib/core/Link/Link.svelte';

    const dispatch = createEventDispatcher();

    let ripple = createRipple('white');

    export let icon: SvelteComponent;
    export let href: string = null;
    export let newTab = false;
    export let disabled = false;
    export let useRipple = true;

    // Style
    export let size: string = "2.5em";
    export let shape: 'circle' | 'square' | 'rounded' = 'rounded';
    export let color: string = "var(--color-primary-500)";
    export let iconColor: string = "white";
</script>


<Link href={href} newTab={newTab}>
    {#if useRipple}
        <button disabled={disabled} class="{shape} overflow-hidden" class:hoverable={!disabled} style="background-color: {color}"
            on:click={() => {dispatch('click');}} use:ripple>
            <svelte:component this={icon} height={size} color={iconColor}/>
        </button>
    {:else}
        <button disabled={disabled} class="{shape} overflow-hidden" class:hoverable={!disabled} style="background-color: {color}"
            on:click={() => {dispatch('click');}}>
            <svelte:component this={icon} height={size} color={iconColor}/>
        </button>
    {/if}
</Link>


<style>
    button {
        padding: 0.7rem;
        transition: filter 0.2s;
    }

    button.hoverable:hover {
        filter: brightness(160%);
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
