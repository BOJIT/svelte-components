<!--
 * @file IconButton.svelte
 * @author James Bennion-Pedley
 * @brief Simple wrapper for icon buttons
 * @date 28/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { Icon as IconType } from '$lib/components/icons';

    import { Button, type ButtonProps } from '$lib/components/ui/button';

    /*--------------------------------- Props --------------------------------*/

    interface IconButtonProps extends ButtonProps {
        Icon: IconType;
        shape?: 'rounded' | 'square' | 'circle';
        scale?: number;
        width?: string;
        height?: string;
        iconSize?: number;
        iconPad?: number;
    }

    let {
        Icon,
        shape = 'rounded',
        scale,
        width = 'w-12',
        height = 'h-12',
        iconSize = 32,
        iconPad = 0.8,
        ...rest
    }: IconButtonProps = $props();

    const styleProps = $derived(
        ''.concat(
            shape === 'rounded'
                ? ''
                : shape === 'square'
                  ? `border-radius: 0px;`
                  : `border-radius: 50%;`,
            scale ? `height: ${scale}px; width: ${scale}px` : ''
        )
    );

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<Button style={styleProps} class={`${width} ${height} [&_svg]:size-34`} size="icon" {...rest}>
    <Icon size={scale ? Math.round(scale * iconPad) : iconSize}></Icon>
</Button>
