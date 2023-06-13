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

    import { basicSetup } from "codemirror";
    import { indentWithTab } from "@codemirror/commands";
    import { Compartment } from "@codemirror/state";
    import { keymap, EditorView } from "@codemirror/view";

    import { oneDark } from "./theme-dark";
    import { javascript } from "@codemirror/lang-javascript";

    import theme from "$lib/theme";

    /*--------------------------------- Props --------------------------------*/

    export let code: string = "";
    export let language: LanguageSupport = javascript(); // Not reactive
    export let padding: string = "0px";
    export let maxHeight: string = "auto";

    const dispatch = createEventDispatcher();

    let div: HTMLDivElement;
    let editorView: EditorView;

    let oneLight = EditorView.baseTheme({});
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
        // Mount editor
        editorView = new EditorView({
            doc: code,
            extensions: [
                basicSetup,
                keymap.of([indentWithTab]),
                editorTheme.of(oneLight),
                language,
            ],
            parent: div,
        });

        // Initial config
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
    <div bind:this={div} class="editor" style={`--max-height: ${maxHeight}`} />
</div>

<style>
    .editor {
        --max-height: auto;
    }

    .editor :global(.cm-scroller) {
        font-family: var(--font-monospace);
        max-height: var(--max-height);
    }
</style>
