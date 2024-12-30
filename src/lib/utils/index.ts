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

import file from './file';
import theme from './theme';

/*--------------------------------- Functions --------------------------------*/

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/*---------------------------------- Exports ---------------------------------*/

export { cn, file, theme };
