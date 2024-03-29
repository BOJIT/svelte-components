<script>
  import { fly } from "svelte/transition";
  import { quadIn } from "svelte/easing";
  import { Scrim } from "../Util";
  import breakpoints from "../../breakpoints";
  import { ClassBuilder } from "../../utils/classes.js";

  const bp = breakpoints();

  const classesDefault = "fixed top-0 md:mt-16 w-auto drawer overflow-hidden h-full";
  const navClassesDefault = `h-full w-full bg-white dark:bg-gray-900 dark:text-gray-200 absolute flex w-auto z-20 drawer
    pointer-events-auto overflow-y-auto`;

  export let right = false;
  export let persistent = false;
  export let elevation = true;
  export let show = true;
  export let classes = classesDefault;
  export let navClasses = navClassesDefault;
  export let borderClasses = `border-gray-600 ${right ? "border-l" : "border-r"}`;




  export let transitionProps = {
    duration: 200,
    x: -300,
    easing: quadIn,
    opacity: 1,
  };

  $: transitionProps.x = right ? 300 : -300;

  // Is the drawer deliberately hidden? Don't let the $bp check make it visible if so.
  let hidden = !show;
  $: if (!hidden) persistent = show = $bp !== "sm";

  const cb = new ClassBuilder(classes, classesDefault);

  if ($bp === 'sm') show = false;

  $: c = cb
    .flush()
    .add(classes, true, classesDefault)
    .add(borderClasses, !elevation && persistent)
    .add($$props.class)
    .add("right-0", right)
    .add("left-0", !right)
    .add("pointer-events-none", persistent)
    .add("z-50", !persistent)
    .add("shadow", elevation)
    .add("z-20", persistent)
    .get();

  const ncb = new ClassBuilder(navClasses, navClassesDefault);

  $: n = ncb
    .flush()
    .get();

</script>

<style>
  .drawer {
    min-width: 250px;
  }

  aside {
    height: 100vh;
  }
</style>

{#if show}
  <aside
    class={c}
    transition:fly|global={transitionProps}
  >
    {#if !persistent}
      <Scrim on:click={() => show = false} />
    {/if}
    <nav
      class={n}
    >
      <div class="w-full">
        <slot />
      </div>
    </nav>
  </aside>
{/if}
