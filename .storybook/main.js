const path = require('path');
const preprocess = require('svelte-preprocess');

module.exports = {
	stories: [
		"../src/lib/**/*.stories.mdx",
		"../src/lib/**/*.stories.@(js|jsx|ts|tsx|svelte)"
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-svelte-csf"
	],
	framework: "@storybook/svelte",
	svelteOptions: {
		preprocess: preprocess(),
	}
}
