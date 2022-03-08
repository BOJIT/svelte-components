const preprocess = require('svelte-preprocess');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/lib/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "storybook-builder-vite"
  },
  "svelteOptions": {
    "preprocess": preprocess()
  }
}