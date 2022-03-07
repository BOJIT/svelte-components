import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		package: {
			files: (filepath) => {
				if (filepath.endsWith('.stories.svelte')) return false;
			}
		}
	}
};

export default config;
