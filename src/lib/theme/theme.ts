/*-------------------------------- Imports -----------------------------------*/

import smelteTheme from '../smelte/dark';
import { derived, writable } from 'svelte/store';

/*--------------------------------- Types ------------------------------------*/

type Palette = {
	colours: {
		primary: string,
		secondary: string,
		error?: string,
		success?: string,
		alert?: string,
		info?: string,

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
	if(typeof window !== 'undefined') {
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
if(typeof window !== 'undefined') {
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
}

/**
 * @brief Get palette colour (not part of main colourset)
 * @param idx Index of palette colour. This will wrap round at end of palette
 */
function palette(idx: number) {
	// TODO
}

/*-------------------------------- Exports -----------------------------------*/

export type { Palette };

export default {
	Mode: mode_store,
	subscribe: state_store.subscribe,
	init,
	palette,
}
