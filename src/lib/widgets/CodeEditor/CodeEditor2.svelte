<!--
 * @file CodeEditor.svelte
 * @author James Bennion-Pedley
 * @brief Interactive Code Editor
 * @date 12/06/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { LanguageSupport } from "@codemirror/language";

    import { onMount, onDestroy, createEventDispatcher } from "svelte";

    import { basicSetup, EditorView } from "codemirror";
    import { Compartment } from "@codemirror/state";

    import { oneDark } from "@codemirror/theme-one-dark";
    import { javascript } from "@codemirror/lang-javascript";

    import theme from "$lib/theme";

    /*--------------------------------- Props --------------------------------*/

    export let code: string = "";
    export let language: LanguageSupport = javascript();
    export let padding: string = "0px";

    const dispatch = createEventDispatcher();

    let div: HTMLDivElement;
    let editorView: EditorView;

    let oneLight = EditorView.theme(
        {
            "&": {
                color: "#24292e",
                backgroundColor: "#ffffff22",
            },
            ".cm-content": {
                caretColor: "#0e9",
            },
            "&.cm-focused .cm-cursor": {
                borderLeftColor: "#0e9",
            },
            "&.cm-focused .cm-selectionBackground, ::selection": {
                backgroundColor: "#074",
            },
            ".cm-gutters": {
                backgroundColor: "#fff",
                color: "#6e7781",
                border: "none",
            },
        },
        { dark: true }
    );

    const editorTheme = new Compartment();

    /*-------------------------------- Methods -------------------------------*/

    export function focus() {
        editorView.focus();
    }

    function save(event: KeyboardEvent) {
        if (editorView.hasFocus !== true) return;

        // TODO check if anything has changed

        // Hook for CTRL+S along with optional 'save button'
        if ((event.ctrlKey || event.metaKey) && event.key === "s") {
            event.preventDefault();
            dispatch("save");
        }
    }

    /*------------------------------- Lifecycle ------------------------------*/

    theme.subscribe((t) => {
        editorView?.dispatch({
            effects: editorTheme.reconfigure(
                t === "light" ? oneLight : oneDark
            ),
        });
    });

    onMount(() => {
        editorView = new EditorView({
            doc: code,
            extensions: [basicSetup, editorTheme.of(oneLight), language],
            parent: div,
        });

        editorView.dispatch({
            effects: editorTheme.reconfigure(
                $theme === "light" ? oneLight : oneDark
            ),
        });
    });

    onDestroy(() => {
        editorView?.destroy();
    });
</script>

<svelte:window on:keydown={save} />

<div class="padding" style:padding>
    <div bind:this={div} class="editor" />
</div>
