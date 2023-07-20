<script lang="ts">
    import theme from "$lib/theme";

    import IconButton from "$lib/form/IconButton/IconButton.svelte";
    import type { SvelteComponent } from "svelte";

    type FooterButton = {
        icon: typeof SvelteComponent;
        label?: string;
        shape?: "square" | "circle" | "rounded";
        color?: string;
        callback?: () => void;
    };

    export let buttons: FooterButton[] = [];
</script>

<footer
    class:bg-primary-50={$theme === "light"}
    class:bg-dark-700={$theme === "dark"}
>
    {#each buttons as button}
        <div class="button-label">
            <IconButton
                color={button.color}
                icon={button.icon}
                size="2.3rem"
                shape={button.shape}
                iconColor={$theme == "dark"
                    ? "var(--color-white)"
                    : "var(--color-dark-500)"}
                on:click={button.callback}
            />
            {#if button.label !== undefined}
                <p>{button.label}</p>
            {/if}
        </div>
    {/each}
</footer>

<style>
    footer {
        /* Self */
        flex: 0 0 auto;
        align-self: end;
        width: 100%;
        /* z-index: 20; */

        /* Children */
        display: flex;
        padding: 0.7rem;
        justify-content: center;
        gap: 0.5rem;
        align-self: flex-end;
    }

    .button-label {
        text-align: center;
    }

    p {
        margin-top: 0.2rem;
        font-size: 0.6rem;
    }
</style>
