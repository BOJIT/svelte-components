<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';

    export let app = false;
    export let progress = 0;
    export let color = 'primary';

    let initialized = false;

    onMount(() => {
        if (!app) return;

        setTimeout(() => {
            initialized = true;
        }, 200);
    });
</script>

<div
    class:fixed={app}
    class:z-50={app}
    class="left-0 top-0 h-1 w-full bg-{color}-100 relative overflow-hidden"
    class:hidden={app && !initialized}
    transition:slide|global={{ duration: 300 }}
>
    <div
        class="bg-{color}-500 absolute h-1"
        class:inc={!progress}
        class:transition={progress}
        style={progress ? `width: ${progress}%` : ''}
    />
    <div class="bg-{color}-500 dec absolute h-1" class:hidden={progress} />
</div>

<style>
    /* kudos https://codepen.io/shalimano/pen/wBmNGJ */
    .inc {
        animation: increase 2s ease-in-out infinite;
    }
    .dec {
        animation: decrease 2s 0.9s ease-in-out infinite;
    }

    @keyframes increase {
        from {
            left: -5%;
            width: 5%;
        }
        to {
            left: 130%;
            width: 150%;
        }
    }
    @keyframes decrease {
        from {
            left: -90%;
            width: 90%;
        }
        to {
            left: 110%;
            width: 10%;
        }
    }
</style>
