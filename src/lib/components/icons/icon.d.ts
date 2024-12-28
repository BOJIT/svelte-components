/**
 * @file icon.d.ts
 * @author James Bennion-Pedley
 * @brief Interface that any imported icons must adhere to
 * @date 28/12/2024
 *
 * @copyright Copyright (c) 2024
 *
 */

/*---------------------------------- Imports ---------------------------------*/

import type { Component } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/*----------------------------------- Types ----------------------------------*/

type RestProps = SvelteHTMLElements['svg'];
interface IconProps extends RestProps {
    /**
     * Specify the icon size.
     * @default 16
     */
    size?: number;

    /**
     * Specify the icon title.
     * @default undefined
     */
    title?: string;

    [key: `data-${string}`]: any;
}

export type Icon = Component<IconProps>; // Contract for all Svelte Icons
