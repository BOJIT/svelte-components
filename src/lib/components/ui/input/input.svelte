<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements';
    import type { WithElementRef } from 'bits-ui';
    import { cn } from '$lib/utils';

    import type { Icon } from '$lib/components/icons';

    interface InputProps extends HTMLInputAttributes {
        icon?: Icon;
    }

    let {
        ref = $bindable(null),
        value = $bindable(),
        icon: IconElement,
        class: className, // bg-background for pass-through
        ...restProps
    }: WithElementRef<InputProps> = $props();
</script>

{#if IconElement}
    <label class="relative block">
        <IconElement
            size={16}
            class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
        />

        <input
            bind:this={ref}
            class={cn(
                'flex h-10 w-full rounded-md border border-input bg-accent px-3 py-2 pl-9 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                className
            )}
            bind:value
            {...restProps}
        />
    </label>
{:else}
    <input
        bind:this={ref}
        class={cn(
            'flex h-10 w-full rounded-md border border-input bg-accent px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
        )}
        bind:value
        {...restProps}
    />
{/if}
