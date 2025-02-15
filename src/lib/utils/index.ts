/**
 * @file index.ts
 * @author James Bennion-Pedley
 * @brief Utility functions used across library
 * @date 26/12/2024
 *
 * @copyright Copyright (c) 2024
 *
 */

/*---------------------------------- Imports ---------------------------------*/

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type * as File from './file';
import * as file from './file';
import type * as Merge from './merge';
import * as merge from './merge';
import type * as Notify from './notify';
import * as notify from './notify';
import type * as TextFit from './textFit';
import * as textFit from './textFit';
import type * as Theme from './theme';
import * as theme from './theme';

/*--------------------------------- Functions --------------------------------*/

// Class name combiner for tailwind classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/*---------------------------------- Exports ---------------------------------*/

export type { File, Merge, Notify, TextFit, Theme };
export { cn, file, merge, notify, textFit, theme };
