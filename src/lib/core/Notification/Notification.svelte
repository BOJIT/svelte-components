<script lang="ts" context="module">
    import { writable } from "svelte/store";

    /* Popup Overlays */
    type Popup = {
        title: string;
        message: string;
        type: "info" | "warning" | "error";
        timeout?: number;
        uid?: number;
    };

    const store = writable([]); // Array of message popups
    let popup_uid = 1;

    function reset() {
        store.set([]);
    }

    function close(uid: number) {
        store.update((popups) => {
            return popups.filter((t) => t.uid !== uid);
        });
    }

    function push(entry: Popup) {
        store.update((popups) => {
            entry.uid = popup_uid++;
            popups = [entry, ...popups];
            /* Auto-remove from store if timeout specified */
            if ("timeout" in entry) {
                setTimeout(() => close(entry.uid), entry.timeout * 1000);
            }
            return popups;
        });
    }

    const message = {
        subscribe: store.subscribe,
        set: store.set,
        reset: reset,
        close: close,
        push: push,
    };

    export { message };
</script>

<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { flip } from "svelte/animate";

    import {
        InformationCircle,
        AlertCircle,
        CloseCircle,
    } from "@svicons/ionicons-outline";

    import Button from "$lib/smelte/components/Button/Button.svelte";
    import theme from "$lib/theme";
</script>

<div class="container">
    {#each $message as entry (entry.uid)}
        <div
            in:fly|global={{ x: -500, delay: 500 }}
            out:fade|global
            animate:flip
            class="popup"
            class:dark={$theme == "dark"}
            class:is-info={entry.type === "info"}
            class:is-warning={entry.type === "warning"}
            class:is-error={entry.type === "error"}
        >
            <div class="popup-flex">
                <div class="popup-icon">
                    {#if entry.type === "info"}
                        <InformationCircle height="2.5rem" />
                    {:else if entry.type === "warning"}
                        <AlertCircle height="2.5rem" />
                    {:else if entry.type === "error"}
                        <CloseCircle height="2.5rem" />
                    {/if}
                </div>
                <div class="popup-message">
                    <h3>{entry.title}</h3>
                    <p>{entry.message}</p>
                </div>
            </div>

            <div class="popup-delete">
                <Button
                    on:click={() => message.close(entry.uid)}
                    icon={"cancel"}
                    transparent
                    circle
                    small
                    iconColor={$theme == "dark"
                        ? "var(--color-white)"
                        : "var(--color-dark-500)"}
                />
            </div>
        </div>
    {/each}
</div>

<style>
    .container {
        position: fixed;
        height: 7em; /* TODO make dependent on message height + a bit */
        width: 30em;
        bottom: 0;
        left: 0;
        pointer-events: none;
        padding: 0.5rem;
        overflow: hidden;

        z-index: 100;
    }

    @media screen and (max-width: 768px) {
        .container {
            width: 100%;
        }
    }

    .popup {
        bottom: 0px;
        width: 100%;
        height: 100%;
        margin-bottom: 0.5rem !important;
        pointer-events: auto;
        border-radius: 0.5rem;
        padding: 0.2rem;
        box-shadow: 0.5px 0.5px 1px var(--color-black-trans-dark);
        position: relative;
    }

    .popup-flex {
        height: 100%;
        max-width: 100%;
        display: flex;
        align-items: center;
    }

    .popup-icon {
        flex: 0 0 auto;
        padding: 0.4rem;
        margin-left: 0.4rem;
        vertical-align: middle;
        line-height: 100%;
    }

    .popup-message {
        flex: 1 1 auto;
        padding: 0.5rem;
        vertical-align: middle;
        margin-top: 0.3rem;
        min-width: 0;
    }

    .popup-message h3 {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .popup-message p {
        margin-top: 0.3rem;
        line-height: 1.2;
        text-overflow: ellipsis;

        overflow: hidden;
        overflow-y: scroll;
        max-height: 3em;
    }

    .popup-delete {
        position: absolute;
        top: 1px;
        right: 1px;
    }

    .is-info {
        background-color: var(--color-blue-300);
    }

    .is-info.dark {
        background-color: var(--color-blue-500);
    }

    .is-warning {
        background-color: var(--color-alert-200);
    }

    .is-warning.dark {
        background-color: var(--color-alert-400);
    }

    .is-error {
        background-color: var(--color-error-300);
    }

    .is-error.dark {
        background-color: var(--color-error-500);
    }
</style>
