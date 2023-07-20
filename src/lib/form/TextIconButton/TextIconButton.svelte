<!--
 * @file TextIconButton.svelte
 * @author James Bennion-Pedley
 * @brief Simple wrapper for creating button with icon and text
 * @date 10/02/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { SvelteComponent } from "svelte";
    import { createEventDispatcher } from "svelte";

    import { Button } from "$lib/smelte";

    /*--------------------------------- Props --------------------------------*/

    export let icon: typeof SvelteComponent;
    export let label: string = "example";
    export let shape: "circle" | "square" | "rounded" = "rounded";

    // Pass through
    export let color;
    export let disabled = false;
    export let outlined = false;

    const dispatch = createEventDispatcher();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<Button
    bind:color
    bind:disabled
    bind:outlined
    square={shape === "square"}
    lozenge={shape === "rounded"}
    circle={shape === "circle"}
    on:click={() => {
        dispatch("click");
    }}
    ><div class="pos">
        <svelte:component this={icon} height="1.5rem" />{label}
    </div></Button
>

<style>
    .pos {
        display: flex;
        gap: 0.7rem;
        padding: 0.2rem;
        margin-left: -0.4rem;
        align-items: center;
    }
</style>
