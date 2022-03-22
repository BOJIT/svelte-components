/*-------------------------------- Imports -----------------------------------*/

import { readable, writable } from 'svelte/store';

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

type ThemeMode = {
	mode: "light" | "dark" | "auto";
}

type ThemeState = {
	mode: "light" | "dark";
}

/*-------------------------------- Private -----------------------------------*/

const DEFAULT_THEME_MODE: ThemeMode = {
	mode: "dark"
};

const DEFAULT_THEME_STATE: ThemeState = {
	mode: "dark"
};

/*-------------------------------- Public ------------------------------------*/

const theme_mode_store = writable(DEFAULT_THEME_MODE);
const theme_state_store = readable(DEFAULT_THEME_STATE);

/*-------------------------------- Exports -----------------------------------*/

export type { Palette };

export default {
	Mode: theme_mode_store,
	State: theme_state_store,
}
