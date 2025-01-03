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

    import { cn } from '$lib/utils';

    import * as Dialog from '$lib/components/ui/dialog';

    import Launch from 'carbon-icons-svelte/lib/Launch.svelte';

    /*--------------------------------- Props --------------------------------*/

    interface ContainerProps {
        ref?: HTMLElement | null;
        class?: string;
        children?: any;
        fullscreen?: boolean;
        propogateRadius?: boolean;
    }

    let {
        ref = $bindable(null),
        class: className,
        children,
        fullscreen = $bindable(false)
    }: ContainerProps = $props();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<Dialog.Root bind:open={fullscreen}>
    <div
        class={cn(
            'root-el relative grid aspect-[4/3] grid-cols-1 grid-rows-1 place-items-center rounded-lg border bg-accent',
            className
        )}
        bind:this={ref}
    >
        {@render children?.()}

        <!-- TODO add snippets for overlayed anchor points -->
        <Dialog.Trigger>
            <div
                class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
                <Launch size={24} />
                <span class="sr-only">Close</span>
            </div>
        </Dialog.Trigger>
    </div>

    <Dialog.Content
        class="h-[calc(100vh-10rem)] w-[calc(100vw-2.5rem)] max-w-none place-items-center rounded-lg bg-accent p-0"
    >
        {@render children?.()}
    </Dialog.Content>
</Dialog.Root>

<style>
    .root-el {
        width: 80%;
        margin: 0 auto;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        .root-el {
            width: 100%;
        }
    }
</style>
