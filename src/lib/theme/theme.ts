/*-------------------------------- Imports -----------------------------------*/

import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';
import smelteTheme from '../smelte/dark';
import generatePalette from '../smelte/utils/color';
import tinycolor from 'tinycolor2';

/*--------------------------------- Types ------------------------------------*/

type Palette = {
    colours: {
        primary: string,
        secondary: string,
        error?: string,
        success?: string,
        alert?: string,
        info?: string,
        background?: {
            light: string,
            dark: string
        },
    },

    swatch?: {
        light: string[],
        dark: string[],
    },

    fonts?: {
        headings?: string,
        body?: string,
        monospace?: string,
    }
}

type ThemeMode = "light" | "dark" | "auto";

/*-------------------------------- Private -----------------------------------*/

/* Get OS Light/Dark Mode */
function getOSTheme() {
    if(browser) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark";
        } else {
            return "light";
        }
    } else {
        return "dark";
    }
}

const DEFAULT_THEME_MODE: ThemeMode = "dark";
const smelteDark = smelteTheme();
let swatchLength: number;
let themeReady = false;

const mode_store = writable(DEFAULT_THEME_MODE as ThemeMode);
const os_store = writable(getOSTheme() as ThemeMode);

/* Handle window theme change without page refresh */
if(browser) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        os_store.set(getOSTheme());
    });
}

const state_store = derived([mode_store, os_store], ([m, o]) => {
    switch (m) {
        case "light":
            return "light";

        case "dark":
            return "dark";

        case "auto":
            return o;
    }
})

/**
 * Handle theme change
 */
state_store.subscribe((s) => {
    switch(s) {
        case "light":
            smelteDark.set(false);
            break;

        case "dark":
            smelteDark.set(true);
            break;
    }
});

/*-------------------------------- Public ------------------------------------*/

/**
 * @brief Initialise theme stores
 * @param palette Optional config to override default theme
 */
function init(palette?: Palette) {
    const cols = flattenObj(generatePalette(flattenObj(palette.colours)));

    for (const [key , val] of Object.entries(cols)) {
        setCssVar(key, val, "--color-");
    }

    if(palette.fonts !== undefined) {
        const fonts = flattenObj(palette.fonts);

        for (const [key , val] of Object.entries(fonts)) {
            setCssVar(key, val, "--font-");
        }
    }

    if(palette.swatch !== undefined) {
        for (const [key , val] of Object.entries(palette.swatch)) {
            val.forEach((el, idx) => {
                let t = tinycolor(el);
                setCssVar("swatch-base-" + idx + "-" + key, el, "--color-");
                setCssVar("swatch-lighter-" + idx + "-" + key, t.lighten().toHexString(), "--color-");
                setCssVar("swatch-darker-" + idx + "-" + key, t.darken().toHexString(), "--color-");
                if(t.getLuminance() > 0.179) {
                    setCssVar("swatch-text-" + idx + "-" + key, "#000000", "--color-");
                } else {
                    setCssVar("swatch-text-" + idx + "-" + key, "#FFFFFF", "--color-");
                }
            });

            if((swatchLength == undefined) || (val.length) < swatchLength) {
                swatchLength = val.length;
            }
        }
    } else {
        swatchLength = 0;
    }

    // Set theme as ready
    themeReady = true;
}


/**
 * @brief Get swatch colour in length-safe manner. Add as inline style
 * @param idx index to extract
 */
function swatchColor(idx) {
    if((swatchLength == undefined) || (swatchLength == 0)) {
        return "";  // Error: swatch not properly initialised
    } else {
        const new_idx = idx % swatchLength;
        const vars = [
            "--color-swatch-base-light: var(--color-swatch-base-" + new_idx + "-light)",
            "--color-swatch-lighter-light: var(--color-swatch-lighter-" + new_idx + "-light)",
            "--color-swatch-darker-light: var(--color-swatch-darker-" + new_idx + "-light)",
            "--color-swatch-text-light: var(--color-swatch-text-" + new_idx + "-light)",
            "--color-swatch-base-dark: var(--color-swatch-base-" + new_idx + "-dark)",
            "--color-swatch-lighter-dark: var(--color-swatch-lighter-" + new_idx + "-dark)",
            "--color-swatch-darker-dark: var(--color-swatch-darker-" + new_idx + "-dark)",
            "--color-swatch-text-dark: var(--color-swatch-text-" + new_idx + "-dark)",
        ];
        return vars.join(';');
    }
}

/**
 * @brief Returns only once the theme has initialised
 */
async function ready(timeout: number) {
    var start = Date.now();
    return new Promise(waitUntilReady);

    function waitUntilReady(resolve, reject) {
        if(themeReady)
            resolve();
        else if(timeout && (Date.now() - start) >= timeout)
            reject(new Error("timeout"));
        else
            setTimeout(waitUntilReady.bind(this, resolve, reject), 30);
    }
}

/*-------------------------------- Private -----------------------------------*/

/**
 * @brief Create flat object from a nested one using recursion
 * @param obj
 * @returns Flattened version of obj
 */
function flattenObj(obj: object) {
    let result = {};
    for(const i in obj) {
        if ((typeof obj[i]) === 'object' && !Array.isArray(obj[i])) {
            const temp = flattenObj(obj[i]);
            for (const j in temp) {
                result[i + '-' + j] = temp[j];
            }
        } else {
            result[i] = obj[i];
        }
    }
    return result;
};

function setCssVar(key: string, val: any, prefix: string) {
    const name = prefix.concat(key.split(/(?=[A-Z])/).join('-').toLowerCase());

    if(browser) {
        document.documentElement.style.setProperty(name, val);
    }
}

/*-------------------------------- Exports -----------------------------------*/

export type { Palette };

export default {
    Mode: mode_store,
    swatchColor,
    ready,
    subscribe: state_store.subscribe,
    init,
}
