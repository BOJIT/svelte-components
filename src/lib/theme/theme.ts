/*-------------------------------- Imports -----------------------------------*/

import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';
import smelteTheme from '../smelte/dark';
import generatePalette from '../smelte/utils/color';

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
		}

		palette?: {
			light: string[],
			dark: string[]
		}
	}

	fonts?: {
		headings?: string,
		body?: string,
		monospace?: string
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
 * @param palette Optional colour palette to override default theme
 */
function init(palette?: Palette) {
	// TODO process palette
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

}

/**
 * @brief Get palette colour (not part of main colourset)
 * @param idx Index of palette colour. This will wrap round at end of palette
 */
function palette(idx: number) {
	// TODO
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
	subscribe: state_store.subscribe,
	init,
	palette,
}
