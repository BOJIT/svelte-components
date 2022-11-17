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
    package: {
        files: (filepath) => {
            if (filepath.includes("test/")) return false;
            return true;
        },
    },
};

export default config;
