<script>
	import {
		Button,
		TextField,
		Checkbox,
		RadioButtonGroup,
		Switch,
		List,
		Select
	} from "$lib/smelte";
	import dark from "$lib/smelte/dark";

	// Theme
	let darkStore = dark();

	// Lists
	const listOneLine = [{
		text: 'Item 1',
		icon: 'favorite',
	}, {
		text: 'Item 2',
		icon: 'favorite',
	}, {
		text: 'Item 3',
		icon: 'favorite',
	}];

	const listTwoLines = [{
		text: 'Item 1',
		icon: 'favorite',
		subheading: 'Subheading 1',
	}, {
		text: 'Item 2',
		icon: 'favorite',
		subheading: 'Subheading 2',
	}, {
		text: 'Item 3',
		icon: 'favorite',
		subheading: 'Subheading 3',
	}];

	// Selects
	let value1 = "";
	let value2 = "";
	let value3 = "";
	let value4 = "";

	let showList = false;

	const items = [
		{ value: 1, text: "One" },
		{ value: 2, text: "Two" },
		{ value: 3, text: "Three" },
		{ value: 4, text: "Four" },
	];

	let selectedItems = [];

	function toggle(i) {
		return v => v.detail
		? selectedItems.push(i)
		: selectedItems = selectedItems.filter(si => si !== i);
	}

	$: selectedLabel = selectedItems.map(i => i.text).join(", ");

	const label = "A select";
</script>

<style>
	h3, h6 {
		padding: 1rem;
	}
</style>

<h3>Light/Dark Mode</h3>

<Button bind:value={$darkStore}>Toggle dark mode</Button>

<br><br><hr><!----------------------------------------------------------------->
<h3>Text Fields</h3>

<h6>Basic</h6>
<TextField label="Test label" />

<h6>With hint</h6>
<TextField label="Test label" hint="Test hint" persistentHint color="blue" />

<h6>With error</h6>
<TextField label="Test label" error="Test error" />

<h6>Outlined</h6>
<TextField label="Test label" outlined />

<h6>Outlined with hint</h6>
<TextField label="Test label" outlined hint="Test hint" />

<h6>Outlined with error</h6>
<TextField label="Test label" outlined error="Test error" />

<h6>Outlined textarea</h6>
<TextField label="Test label" textarea rows={5} outlined />

<h6>With basic validation (type="number" min="10" max="100")</h6>
<TextField label="Test label" outlined type="number" min="10" max="100" />

<br><br><hr><!----------------------------------------------------------------->
<h3>Buttons</h3>

<h6>Basic</h6>
<Button>Button</Button>

<h6>Light</h6>
<Button light>Button</Button>

<h6>Dark</h6>
<Button dark>Button</Button>

<h6>Block</h6>
<Button color="alert" dark block>Button</Button>

<h6>Outlined</h6>
<Button color="secondary" light block outlined>Button</Button>

<h6>Text</h6>
<Button text>Button</Button>

<h6>Disabled</h6>
<Button block disabled>Button</Button>

<h6>FAB <a href="https://material.io/components/buttons-floating-action-button/">(Floating action button)</a></h6>
<Button color="alert" icon="change_history" />

<h6>Fab flat</h6>
<Button color="error" icon="change_history" text light flat />

<br><br><hr><!----------------------------------------------------------------->
<h3>Selection Controls</h3>

<h6>Checkboxes</h6>

<Checkbox label="A checkbox" />
<Checkbox color="secondary" label="A colored checkbox" />
<Checkbox disabled label="A disabled checkbox" />

<h6>Radio Buttons</h6>

<RadioButtonGroup
  name="test"
  items={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]} />

<RadioButtonGroup
  name="Colored test"
  color="blue"
  items={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]} />

<RadioButtonGroup
  name="test-disabled"
  disabled
  items={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]} />

<h6>Switches</h6>

<Switch />

<Switch color="error" />

<br><br><hr><!----------------------------------------------------------------->
<h3>Lists</h3>

<h6>One-line</h6>
<List items={listOneLine} />

<h6>Two-line</h6>
<List items={listTwoLines} />

<h6>Dense</h6>
<List dense items={listTwoLines} />

<br><br><hr><!----------------------------------------------------------------->
<h3>Selects</h3>

<p>
	One may bind to a select via
	<span class="code-inline">on:change</span>
	event.
</p>
<small>Selected: {value1 || 'nothing'}</small>
<Select {label} {items} on:change={v => (value1 = v.detail)} />

<p>
	Or through binding
	<span class="code-inline">on:value</span>
	.
</p>
<small>Selected: {value2 || 'nothing'}</small>
<Select color="success" bind:value={value2} {label} {items} />

<p>Select may be outlined.</p>
<Select bind:value={value2} outlined {label} {items} />

<p>Select may even be an autocomplete search component.</p>
<small>Selected: {value3 || 'nothing'}</small>
<Select bind:value={value3} outlined autocomplete {label} {items} />

<p>Custom options slot</p>

<Select
	{selectedLabel}
	outlined
	color="red"
	inputClasses={i => i.replace('rounded-t', 'rounded-full')}
	appendClasses={i => i.replace('text-gray-700', 'text-red-700')}
	label="Categories"
	{items}
>
	<div slot="options" class="shadow rounded px-2 py-4 mt-0" on:click|stopPropagation>
		{#each items as item}
		<Checkbox
			value={selectedItems.includes(item)}
			class="block my-2"
			color="red"
			label={item.text}
			on:change={toggle(item)}
		/>
		{/each}
	</div>
</Select>

<br><br><hr><!----------------------------------------------------------------->
<h3>Selects</h3>
