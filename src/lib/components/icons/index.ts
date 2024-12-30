/**
 * @file index.ts
 * @author James Bennion-Pedley
 * @brief Custom icons that I commonly use
 * @date 30/12/2024
 *
 * @copyright Copyright (c) 2024
 *
 */

/*---------------------------------- Imports ---------------------------------*/

import type { Component } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

import type { CarbonIconProps } from 'carbon-icons-svelte';

import BitBucket from './brands/BitBucket.svelte';
import CMake from './brands/CMake.svelte';
import Svelte from './brands/Svelte.svelte';

/*----------------------------------- Types ----------------------------------*/

type RestProps = SvelteHTMLElements['svg'];
interface IconProps extends RestProps {
    /**
     * Specify the icon size. Any number is valid
     */
    size?: number;

    /**
     * Specify the icon title
     * @default undefined
     */
    title?: string;

    [key: `data-${string}`]: any;
}

// This is required to bypass strict typing of Carbon size property
interface CombinedIconProps extends IconProps, Omit<CarbonIconProps, 'size'> {
    size?: number;
}

export type Icon = Component<CombinedIconProps>; // Contract for all Svelte Icons

/*---------------------------------- Exports ---------------------------------*/

export { BitBucket, CMake, Svelte };
