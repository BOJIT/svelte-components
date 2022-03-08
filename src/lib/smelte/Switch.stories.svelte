<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	
	
	import Switch from "smelte/src/components/Switch";
</script>

<Meta
	title="Smelte/Switch"
	component={Switch}
	argTypes={{
		color: { control: "color" },
		onChange: { action: "onChange" },
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Switch {...args} on:change={args.onChange} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
	name="Primary"
	args={{
		color: "red"
	}}
/>

<Story
	name="Secondary"
	args={{
		color: "blue"
	}}
/>
