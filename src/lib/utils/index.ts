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
import type * as Notify from './notify';
import * as notify from './notify';
import type * as Theme from './theme';
import * as theme from './theme';

/*--------------------------------- Functions --------------------------------*/

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/*---------------------------------- Exports ---------------------------------*/

export type { File, Notify, Theme };
export { cn, file, notify, theme };
