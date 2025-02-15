<!--
 * @file ModalImage.svelte
 * @author James Bennion-Pedley
 * @brief Image where image can be clicked for full-screen view
 * @date 15/02/2025
 *
 * @copyright Copyright (c) 2025
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { HTMLImgAttributes } from 'svelte/elements';

    /*--------------------------------- Props --------------------------------*/

    interface ModalImageProps extends HTMLImgAttributes {
        enabled: boolean;
    }

    let { enabled = true, alt, ...rest }: ModalImageProps = $props();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

{#if enabled}
    <button
        aria-label={alt}
        onclick={() => {
            console.log('Clicked');
        }}
    >
        <img {alt} {...rest} />
    </button>
{:else}
    <img {alt} {...rest} />
{/if}

<style>
</style>
