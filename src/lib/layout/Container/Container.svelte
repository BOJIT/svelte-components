<!--
 * @file Container.svelte
 * @author James Bennion-Pedley
 * @brief Maximisable Container for Custom Widgets
 * @date 17/11/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang='ts'>
    import { fade } from "svelte/transition";
    import { IconButton } from "$lib/form";
    import IconExpand from "@svicons/ionicons-outline/expand.svelte";
    import IconContract from "@svicons/ionicons-outline/contract.svelte";

    export let aspect: string = "4:3";
    export let zoomable: boolean = true;

    export let buttonLocation: "top-left" | "top-right" |
                               "bottom-left" | "bottom-right" = "top-right";

    let zoom = false;
    let padding = "0%";

    let buttonCSS: boolean[] = [true, false, false, true];

    $: {
        // Aspect ratio:
        let ratio = parseInt(aspect.split(':')[0]) / parseInt(aspect.split(':')[1]);
        padding = (100 / ratio).toString().concat("%");

        // Button location:
        switch(buttonLocation) {
            case "top-left":
                buttonCSS = [true, false, true, false];
                break;
            case "top-right":
                buttonCSS = [true, false, false, true];
                break;
            case "bottom-left":
                buttonCSS = [false, true, true, false];
                break;
            case "bottom-right":
                buttonCSS = [false, true, false, true];
                break;
        }
    };
</script>


<div class="container-padded">
    <div class="container-aspect" style:padding-bottom={padding}>
        <div class="controls"
            class:top={buttonCSS[0]}
            class:bottom={buttonCSS[1]}
            class:left={buttonCSS[2]}
            class:right={buttonCSS[3]}
        >
            <IconButton icon={IconExpand} color="#8b8b8b22"
                size="1.5em" useRipple={false}
                on:click={() => {
                    if(zoomable)
                        zoom = true;
                }}
            />
        </div>
        <div class="container" class:zoom>
            <slot />
        </div>
    </div>
</div>

{#if zoom}
    <div class="scrim" in:fade={{duration: 2}}/>
{/if}

<div class="shrink" class:zoom
    class:top={buttonCSS[0]}
    class:bottom={buttonCSS[1]}
    class:left={buttonCSS[2]}
    class:right={buttonCSS[3]}
>
    <IconButton icon={IconContract} color="#8b8b8b22" size="2em" useRipple={false}
    on:click={() => { zoom = false; }}/>
</div>


<style>
    .container-padded {
        margin: 0 auto;
        width: 80%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .container-aspect {
        position: relative;
        border-radius: 0.75em;
        overflow: hidden;
    }

    .controls {
        position: absolute;
        z-index: 2;
    }

    .controls.top {
        top: 0.5rem;
    }

    .controls.bottom {
        bottom: 0.5rem;
    }

    .controls.left {
        left: 0.5rem;
    }

    .controls.right {
        right: 0.5rem;
    }

    .container {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: #f5f2f0;
    }

    :global(.mode-dark) .container {
        background-color: #2d2d2d;
    }

    @media (max-width: 768px) {
        .container-padded {
            width: 100%;
        }
    }

    /* Child must fill container */
    .container > :global(*) {
        width: 100%;
        height: 100%;
    }

    /* Handle Zoom overlay */
    .container.zoom {
        position: fixed;
        top: 1rem;
        left: 1rem;
        width: calc(100vw - 2rem);
        height: calc(100vh - 2rem);
        z-index: 100;
        overflow: hidden;

        /* Add edging */
        border-radius: 0.75rem;
    }

    .scrim {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99;

        background-color: rgba(29, 29, 29, 0.744);
    }

    :global(.mode-dark) .scrim {
        background-color: rgba(0, 0, 0, 0.684);
    }

    .shrink {
        position: fixed;
        display: none;
    }

    .shrink.zoom {
        display: block;
        z-index: 101;
    }

    .shrink.top {
        top: 1.5rem;
    }

    .shrink.bottom {
        bottom: 1.5rem;
    }

    .shrink.left {
        left: 1.5rem;
    }

    .shrink.right {
        right: 1.5rem;
    }
</style>
