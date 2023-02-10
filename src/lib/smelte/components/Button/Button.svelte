<script>
  import Icon from "../Icon";
  import utils, { ClassBuilder, filterProps } from "../../utils/classes.js";
  import createRipple from "../Ripple/ripple.js";

  export let value = false;
  export let outlined = false;
  export let text = false;
  export let block = false;
  export let disabled = false;
  export let icon = null;
  export let small = false;
  export let light = false;
  export let dark = false;
  export let flat = false;
  export let iconClass = "";
  export let color = "primary";
  export let href = null;
  export let fab = false;
  export let type = "button";

  // BOJIT overrides
  export let square = false;
  export let lozenge = false;
  export let circle = false;
  export let transparent = false;
  export let iconColor = null;
  export let iconSize = null;

  export let remove = "";
  export let add = "";
  export let replace = {};

  const classesDefault = 'py-2 px-4 uppercase text-sm font-medium relative overflow-hidden';
  const basicDefault = 'text-white duration-200 ease-in';

  const outlinedDefault = 'bg-transparent border border-solid';
  const textDefault = 'bg-transparent border-none px-4 hover:bg-transparent';
  const iconDefault = 'p-4 flex items-center select-none';
  const fabDefault = 'hover:bg-transparent';
  const smallDefault = 'pt-1 pb-1 pl-2 pr-2 text-xs';
  const disabledDefault = 'bg-gray-300 text-gray-500 dark:bg-dark-400 pointer-events-none hover:bg-gray-300 cursor-default';
  const elevationDefault = 'hover:shadow shadow';

  export let classes = classesDefault;
  export let basicClasses = basicDefault;
  export let outlinedClasses = outlinedDefault;
  export let textClasses = textDefault;
  export let iconClasses = iconDefault;
  export let fabClasses = fabDefault;
  export let smallClasses = smallDefault;
  export let disabledClasses = disabledDefault;
  export let elevationClasses = elevationDefault;

  fab = fab || (text && icon);
  const basic = !outlined && !text && !fab;
  const elevation = (basic || icon) && !disabled && !flat && !text;

  let Classes = i => i;
  let iClasses = i => i;
  let shade = 0;

  $: {
    shade = light ? 200 : 0;
    shade = dark ? -400 : shade;
  }
  $: normal = 500 - shade;
  $: lighter = 400 - shade;

  const {
    bg,
    border,
    txt,
  } = utils(color);

  const cb = new ClassBuilder(classes, classesDefault);
  let iconCb;

  if (icon) {
    iconCb = new ClassBuilder(iconClass);
  }

  $: classes = cb
      .flush()
      .add(basicClasses, basic, basicDefault)
      .add(`${bg(normal)} hover:${bg(lighter)}`, basic)
      .add(elevationClasses, elevation, elevationDefault)
      .add(outlinedClasses, outlined, outlinedDefault)
      .add(
        `${border(lighter)} ${txt(normal)} hover:${bg("trans")} dark-hover:${bg("transDark")}`,
        outlined)
      .add(`${txt(lighter)}`, text)
      .add(textClasses, text, textDefault)
      .add(iconClasses, icon, iconDefault)
      .remove("py-2", icon)
      .remove(txt(lighter), fab)
      .add(disabledClasses, disabled, disabledDefault)
      .add(smallClasses, small, smallDefault)
      .add("flex items-center justify-center h-8 w-8", small && icon)
      .add("border-solid", outlined)
      .add("rounded-full", icon)
      .add("w-full", block)
      .add("rounded", basic || outlined || text)
      .add("button", !icon)
      .add(fabClasses, fab, fabDefault)
      .add(`hover:${bg("transLight")}`, fab)
      .add($$props.class)
      .remove(remove)
      .replace(replace)
      .add(add)
      .get();

  $: if (iconCb) {
    iClasses = iconCb.flush().add(txt(), fab && !iconClass).get();
  }

  const ripple = createRipple((text || fab || outlined) ? color : "white");

  const props = filterProps([
    'outlined',
    'text',
    'color',
    'block',
    'disabled',
    'icon',
    'small',
    'light',
    'dark',
    'flat',
    'add',
    'remove',
    'replace',
  ], $$props);
</script>


{#if href}
  <a
    {href}
    {...props}
  >
    <button
      use:ripple
      class={classes}
      class:square={square}
      class:lozenge={lozenge}
      class:circle={circle}
      class:transparent={transparent}
      class:padding-override={iconSize !== null}
      {...props}
      {type}
      {disabled}
      on:click={() => (value = !value)}
      on:click
      on:mouseover
      on:focus
      on:*
    >
      {#if icon}
        <Icon class={iClasses} {small} color={iconColor !== null ? iconColor : 'default'}>{icon}</Icon>
      {/if}
      <slot />
    </button>
  </a>
{:else}
  <button
    use:ripple
    class={classes}
    class:square={square}
    class:lozenge={lozenge}
    class:circle={circle}
    class:transparent={transparent}
    class:padding-override={iconSize !== null}
    {...props}
    {type}
    {disabled}
    on:click={() => (value = !value)}
    on:click
    on:mouseover
    on:focus
    on:*
  >
    {#if icon}
      <Icon class={iClasses} {small} color={iconColor !== null ? iconColor : 'default'}
                    size={iconSize !== null ? iconSize : ''}>{icon}</Icon>
    {/if}
    <slot />
  </button>
{/if}

<style>
	button {
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	button:focus {
		outline: none;
		box-shadow: none;
	}

	button.square {
		border-radius: 0% !important;
	}

	button.lozenge {
		border-radius: 0.5rem !important;
	}

	button.circle {
		/* border-radius: 50% !important; */
		border-radius: 20vmin;
	}

	button.transparent {
		background-color: var(--color-transparent);
		box-shadow: none;
	}

	button.transparent:hover {
		background-color: var(--color-white-trans-light);
	}

	button.padding-override {
		padding: 0.5rem;
	}
</style>
