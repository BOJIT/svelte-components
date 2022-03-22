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

const DEFAULT_THEME_MODE: ThemeMode = "dark";
const smelteDark = smelteTheme();

const mode_store = writable(DEFAULT_THEME_MODE as ThemeMode);
const state_store = derived(mode_store, (s) => {
	switch (s) {
		case "light":
			return "light";
		
		case "dark":
			return "dark";

		case "auto":
			// Get OS theme
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				return "dark";
			} else {
				return "light";
			}
	}
})

/**
 * Handle theme change
 */
state_store.subscribe((s) => {
	console.log(s);
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
	/* Handle window theme change without page refresh */
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
		mode_store.update((s) => { return s });
	});

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
