import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: {
        configFilePath: "./src/lib/postcss.config.cjs"
      },
    }),
  ],

  kit: {
    adapter: adapter(),
    package: {
      files: (filepath) => {
        if (filepath.endsWith(".stories.svelte")) return false;
        if (filepath.endsWith(".stories.mdx")) return false;
        return true;
      },
    },
  },
};

export default config;
