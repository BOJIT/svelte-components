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
    export let aspect: string = "16:5";

    let padding = "0%";

    $: {
        let ratio = parseInt(aspect.split(':')[0]) / parseInt(aspect.split(':')[1]);
        padding = (100 / ratio).toString().concat("%");
    }
</script>

<div class="container-padded" style:padding-bottom={padding}>
    <div class="container">
        <slot />
    </div>
</div>


<style>
    .container-padded {
        position: relative;
        margin: 0 auto;
        width: 80%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .container {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 0.5em;
        background-color: #f5f2f0;
    }

    :global(.mode-dark) .container {
        background-color: #2d2d2d;
    }

    @media (max-width: 768px) {
        .container {
            width: 100%;
        }
    }
</style>
