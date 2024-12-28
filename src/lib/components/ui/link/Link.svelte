<!--
 * @file Link.svelte
 * @author James Bennion-Pedley
 * @brief Convenience Wrapper for elements that may be wrapped by links
 * @date 18/07/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { HTMLAnchorAttributes } from 'svelte/elements';

    /*--------------------------------- Props --------------------------------*/

    let { href, children, ...rest }: HTMLAnchorAttributes = $props();
</script>

{#if href !== null}
    <a {href} {...rest}>
        {@render children?.()}
    </a>
{:else}
    {@render children?.()}
{/if}
