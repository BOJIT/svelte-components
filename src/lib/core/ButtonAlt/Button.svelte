<script lang="ts">
	/* Svelte core */
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/* Icon lib */
	import Icon from 'svelte-awesome';
	import { faInfo } from '@fortawesome/free-solid-svg-icons';

	type ButtonShape = 'square' | 'circle' | 'rounded';
	type ButtonSize = 'is-small' | 'is-medium' | 'is-large' | 'is-huge';

	/* Button props */
	export let icon = faInfo;
	export let shape: ButtonShape = 'rounded';
	export let size: ButtonSize = 'is-large';
	export let shadow: boolean = false;
	export let color: string = null;
	export let disabled: boolean = false;

	const icon_map = {
		'is-small': 1,
		'is-medium': 1.5,
		'is-large': 1.75,
		'is-huge': 3
	}
</script>

<div>
	<button on:click={() => {
			dispatch('click');
		}} class="button {size} {shape}"
		class:shadow class:is-default={(color === null)}
		class:color style="background-color: {color}"
		disabled={disabled}>
		<span class="icon">
			<Icon data={icon} scale={icon_map[size]} />
		</span>
	</button>
</div>

<style>

	/* Global */
	.button {
		border: none;
	}

	.button:focus {
		outline: none;
		box-shadow: none;
	}

	.icon {
		color: rgb(255, 255, 255);
	}

	/* Size (extra) */
	.is-huge {
		font-size: 3em;
	}

	/* Shape */
	.square {
		border-radius: 0%;
	}

	.circle {
		border-radius: 50%;
	}

	.rounded {
		border-radius: 20%;
	}

	/* Drop Shadow */
	.shadow {
		box-shadow: 1px 1px 2px 0px rgb(22, 22, 22);
	}

	/* Default Colours */
	.button.is-default {
		background-color: red;
	}

	.button.is-default:hover {
		background-color: pink;
	}

	/* Custom Colours */
	.color:hover {
		filter: saturate(50%);
	}
</style>
