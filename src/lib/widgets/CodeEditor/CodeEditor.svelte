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

    import { onMount, onDestroy, createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";

    import { indentWithTab } from "@codemirror/commands";
    import { type LanguageSupport, indentUnit } from "@codemirror/language";
    import { Compartment } from "@codemirror/state";
    import {
        keymap,
        lineNumbers as lineNumbersExtension,
        EditorView,
        type ViewUpdate,
    } from "@codemirror/view";

    import { codeSetup } from "./codeSetup";
    import { oneDark } from "./theme-dark";
    import { javascript } from "@codemirror/lang-javascript";

    import theme from "$lib/theme";

    /*--------------------------------- Props --------------------------------*/

    export let code: string = "";
    export let language: LanguageSupport = javascript(); // Not reactive
    export let padding: string = "0px";
    export let maxHeight: string = "auto";
    export let lineNumbers: boolean = true;

    const dispatch = createEventDispatcher();

    let div: HTMLDivElement;
    let editorView: EditorView;

    const oneLight = EditorView.baseTheme({});
    const editorTheme = new Compartment();
    const editorLineNumbers = new Compartment();
    const editorLanguage = new Compartment();

    let unsavedChanges: boolean = false;

    /*-------------------------------- Methods -------------------------------*/

    export function focus() {
        editorView.focus();
    }

    function codeChanged(v: ViewUpdate) {
        unsavedChanges = true;
        code = v.state.doc.toString();
    }

    function save(event: KeyboardEvent) {
        if (editorView.hasFocus !== true) return;

        // Hook for CTRL+S along with optional 'save button'
        if ((event.ctrlKey || event.metaKey) && event.key === "s") {
            event.preventDefault();
            if (unsavedChanges == true) {
                unsavedChanges = false;
                dispatch("save", code);
            }
        }
    }

    /*------------------------------- Lifecycle ------------------------------*/

    $: editorView?.dispatch({
        effects: editorLineNumbers.reconfigure(
            lineNumbers ? lineNumbersExtension() : []
        ),
    });

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
                indentUnit.of("    "),
                editorLineNumbers.of(lineNumbers ? lineNumbersExtension() : []),
                codeSetup,
                keymap.of([indentWithTab]),
                editorTheme.of(oneLight),
                // Listen for changes
                EditorView.updateListener.of((v: ViewUpdate) => {
                    if (v.docChanged) codeChanged(v);
                }),
                editorLanguage.of(language),
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

<div class="container" style:padding>
    <div bind:this={div} class="editor" style={`--max-height: ${maxHeight}`} />
    {#if unsavedChanges}
        <div
            on:keypress
            on:click={() => {
                unsavedChanges = false;
                dispatch("save", code);
            }}
            class="overlay"
            transition:fade={{ duration: 100 }}
        />
    {/if}
</div>

<style>
    .container {
        position: relative;
        padding-left: 1rem;
    }

    .overlay {
        position: absolute;
        top: 0.6rem;
        right: 0.3rem;
        width: 0.8rem;
        height: 0.79rem;
        background-color: #b4b4b4;
        border-radius: 50%;
    }

    .overlay:hover {
        box-shadow: 0px 0px 4px #4195fc;
    }

    :global(.mode-dark) .overlay {
        background-color: white;
    }

    .editor {
        --max-height: auto;
        position: static;
        height: 100%;
        width: 100%;
    }

    .editor :global(.cm-scroller) {
        font-family: var(--font-monospace);
        max-height: var(--max-height);
    }

    .editor :global(.cm-tooltip) {
        font-family: var(--font-monospace);
    }
</style>
