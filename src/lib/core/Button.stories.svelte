<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Button from "./Button.svelte";
</script>

<Meta
	title="BOJIT/Button"
	component={Button}
	argTypes={{
		color: { control: "color" },
		onClick: { action: "onClick" },
		size: {
			options: ['is-small', 'is-medium', 'is-large', 'is-huge'],
		},
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Button {...args} on:click={args.onClick} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
	name="Primary"
	args={{
		color: "red"
	}}
/>

<Story
	name="Primary"
	args={{
		color: "blue"
	}}
/>
