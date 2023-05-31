import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".svelte.md"],
    preprocess: [mdsvex({
            extensions: [".svelte.md"],
        }),
        preprocess()
    ],
    kit: {
        adapter: adapter(),
    },
    };

export default config;
