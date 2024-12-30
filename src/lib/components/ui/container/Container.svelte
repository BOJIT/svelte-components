<!--
 * @file Container.svelte
 * @author James Bennion-Pedley
 * @brief Generic inline container that can be fullscreened
 * @date 30/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import * as Dialog from '$lib/components/ui/dialog/index';

    /*--------------------------------- Props --------------------------------*/

    interface ContainerProps {
        ref?: HTMLElement | null;
        class?: string;
        children?: any;
    }

    let { ref = $bindable(null), class: className, children }: ContainerProps = $props();

    let fullscreen: boolean = $state(false);

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<Dialog.Root bind:open={fullscreen}>
    <div class="root-el grid place-items-center border bg-accent sm:rounded-lg" bind:this={ref}>
        <Dialog.Trigger>
            {@render children?.()}
            <div>EXPAND</div>
        </Dialog.Trigger>
    </div>

    <Dialog.Content
        class="h-[calc(100vh-2.5rem)] w-[calc(100vw-2.5rem)] max-w-none place-items-center bg-accent p-0"
    >
        {@render children?.()}
    </Dialog.Content>
</Dialog.Root>

<style>
    .root-el {
        height: 17rem;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
    }
</style>
