<script>
  import { scale, fade } from "svelte/transition";
  import { quadIn } from "svelte/easing";
  import { Scrim } from "../Util";
  import { ClassBuilder } from "../../utils/classes.js";

  const classesDefault = "items-center z-50 rounded bg-white dark:bg-dark-400 p-4 shadow";
  const titleClassesDefault = "text-lg font-bold pb-4";
  const actionsClassesDefault = "flex w-full justify-end pt-4";

  export let value;
  export let classes = classesDefault;
  export let titleClasses = titleClassesDefault;
  export let actionsClasses = actionsClassesDefault;
  export let opacity = 0.5;
  export let persistent = false;

  export let transitionProps = { duration: 150, easing: quadIn, delay: 150 };

  export let fillWidth = false;

  const cb = new ClassBuilder(classes, classesDefault);
  const tcb = new ClassBuilder(titleClasses, titleClassesDefault);
  const acb = new ClassBuilder(actionsClasses, actionsClassesDefault);

  $: c = cb
    .flush()
    .add(classes, true, classesDefault)
    .add($$props.class)
    .get();

  $: t = tcb
    .flush()
    .add(titleClasses, true, actionsClassesDefault)
    .get();

  $: a = acb
    .flush()
    .add(actionsClasses, true, actionsClassesDefault)
    .get();
</script>

{#if value}
  <div class="fixed w-full h-full top-0 left-0 z-30">
    <Scrim {opacity} on:click={() => !persistent && (value = false)} />
    <div class="h-full w-full absolute flex items-center justify-center">
      <div
        in:scale|global={transitionProps}
        out:fade|global={transitionProps}
        class={c}>
        <div class={t}>
          <slot name="title" />
        </div>
        {#if fillWidth}
            <div class="push" />
        {/if}
        <slot />
        <div class={a}>
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
{/if}


<style>
    /* Desktop adjustments */
    .push {
        width: 500px;
        height: 0px;
    }

    /* Tablet adjustments */
    @media (max-width: 1200px) {
        .push {
            width: 500px;
        }
    }

    /* Mobile adjustments */
    @media (max-width: 768px) {
        .push {
            width: 90vw;
        }
    }
</style>
