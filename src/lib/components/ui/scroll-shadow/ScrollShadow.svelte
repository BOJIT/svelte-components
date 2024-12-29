<!--
 * @file ScrollShadow.svelte
 * @author James Bennion-Pedley
 * @brief Scroll area shadows (instead of bar)
 * @date 29/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { cn } from '$lib/utils.js';

    /*--------------------------------- Props --------------------------------*/

    interface ScrollShadowProps {
        direction?: 'vertical' | 'horizontal';
        ref?: HTMLElement | null;
        class?: string;
        children?: any;
    }

    let {
        direction = 'vertical',
        ref = $bindable(null),
        class: className,
        children,
        ...restProps
    }: ScrollShadowProps = $props();

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<div class={cn('scroll-shadows', className)} {...restProps} bind:this={ref}>
    {@render children?.()}
</div>

<style>
    .scroll-shadows > :global(*) {
        overflow: auto;

        background-image:
            /* Shadows */
            linear-gradient(to right, white, white),
            linear-gradient(to right, white, white),
            /* Shadow covers */
                linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0)),
            linear-gradient(to left, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0));

        background-position:
            left center,
            right center,
            left center,
            right center;
        background-repeat: no-repeat;
        background-color: white;
        background-size:
            20px 100%,
            20px 100%,
            10px 100%,
            10px 100%;

        /* Opera doesn't support this in the shorthand */
        background-attachment: local, local, scroll, scroll;
    }

    .scroll-bk {
        max-height: 200px;
        overflow: auto;

        background:
            /* Shadow Cover TOP */
            linear-gradient(rgb(192, 26, 26) 30%, rgba(255, 255, 255, 0)) center top,
            /* Shadow Cover BOTTOM */ linear-gradient(rgba(255, 255, 255, 0), rgb(206, 22, 22) 70%)
                center bottom,
            /* Shadow TOP */
                radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center
                top,
            /* Shadow BOTTOM */
                radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))
                center bottom;

        background-repeat: no-repeat;
        background-size:
            100% 40px,
            100% 40px,
            100% 14px,
            100% 14px;
        background-attachment: local, local, scroll, scroll;
    }
</style>
