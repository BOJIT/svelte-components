/**
 * @file theme.ts
 * @author James Bennion-Pedley
 * @brief Theme utilities
 * @date 29/12/2024
 *
 * @copyright Copyright (c) 2024
 *
 */

/*---------------------------------- Imports ---------------------------------*/

/*----------------------------------- Type -----------------------------------*/

export type Theme = 'light' | 'dark';
export type ThemeMode = 'light' | 'dark' | 'system';
export type RGB = [number, number, number];

/*----------------------------------- State ----------------------------------*/

const swatchLength: number = 8; // Number of CSS entries before looping

/*--------------------------------- Functions --------------------------------*/

/**
 * @brief Get swatch colour in length-safe manner. Add as inline style
 * @param idx index to extract
 * @returns CSS string to style background and foreground
 */
function swatchCSS(idx: number): string {
    const new_idx = idx % swatchLength;
    const vars = [
        `--swatch-base: var(--swatch-base-${new_idx})`,
        `--swatch-text: var(--swatch-text-${new_idx})`
    ];
    return vars.join(';');
}

/**
 * @brief Get swatch colour in length-safe manner. For elements that don't accept CSS
 * @param idx index to extract
 * @returns RGB of current theme (NOT REACTIVE!)
 */
function swatchJS(idx: number): RGB {
    if (typeof document === 'undefined') return [0, 0, 0];

    const new_idx = idx % swatchLength;
    const style = getComputedStyle(document.documentElement);
    return (hexToRgb(style.getPropertyValue(`--swatch-base-${new_idx}`)) as RGB) ?? [0, 0, 0];
}

function hexToRgb(
    hex: string,
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
): number[] | null {
    return result ? result.map((i) => parseInt(i, 16)).slice(1) : null;
}

/*---------------------------------- Exports ---------------------------------*/

export { swatchCSS, swatchJS, hexToRgb };
