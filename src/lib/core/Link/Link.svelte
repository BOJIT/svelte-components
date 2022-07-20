<!--
 * @file Link.svelte
 * @author James Bennion-Pedley
 * @brief Convenience Wrapper for elements that may be wrapped by links
 * @date 18/07/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang='ts'>
    export let href = null;

    export let newTab = false;
</script>


{#if href !== null}
    <a href={href} target={newTab ? "_blank" : ""}>
        <slot />
    </a>
{:else}
    <slot />
{/if}
