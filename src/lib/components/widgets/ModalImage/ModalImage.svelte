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

    import Close from 'carbon-icons-svelte/lib/Close.svelte';

    /*--------------------------------- Props --------------------------------*/

    interface ModalImageProps extends HTMLImgAttributes {
        enabled: boolean;
        caption?: string;
    }

    let { enabled = true, caption, alt, ...rest }: ModalImageProps = $props();

    let dialog: HTMLDialogElement;
</script>

{#if enabled}
    <button
        aria-label={alt}
        onclick={() => {
            if (!dialog.open) dialog.showModal();
        }}
    >
        <img {alt} {...rest} />
    </button>
{:else}
    <img {alt} {...rest} />
{/if}

<dialog bind:this={dialog}>
    <img {alt} {...rest} />
    <button
        class="absolute right-1 top-1 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        onclick={() => {
            dialog.close();
        }}
    >
        <Close size={24} />
        <span class="sr-only">Close</span>
    </button>
    <span class="absolute bottom-2 flex w-screen justify-center">
        <h4 class="px-4 py-2 text-center">{caption ?? alt}</h4>
    </span>
</dialog>

<style>
    h4 {
        color: hsl(0, 0%, 98%);
        background-color: #232323af;
    }

    dialog {
        overflow: hidden;
        background-color: transparent;
        width: calc(100vw - 2rem);
        height: calc(100vh - 2rem);

        img {
            object-fit: contain;
            opacity: 1 !important;
            max-width: calc(100vw - 2rem);
            max-height: calc(100vh - 2rem);
        }
    }

    dialog::backdrop {
        background-image: linear-gradient(0, #131313, #646464);
        opacity: 0.75;
    }
</style>
