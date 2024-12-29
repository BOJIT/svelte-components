<!--
 * @file Terminal.svelte
 * @author James Bennion-Pedley
 * @brief Terminal Panel
 * @date 31/10/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { onDestroy, onMount } from 'svelte';

    import { mode } from 'mode-watcher';
    import type { Theme } from '$lib/components/App.svelte';

    /* XTermJS */
    import type { Terminal } from '@xterm/xterm';
    import type { FitAddon } from '@xterm/addon-fit';
    import '@xterm/xterm/css/xterm.css';

    /*--------------------------------- Types --------------------------------*/

    interface TerminalProps {
        rows?: number;
        class?: string;
        onread?: (data: string) => void;
        loopback?: boolean;
        autoCLRF?: boolean; // NOTE: this is not reactive
    }

    // TODO add auto-row height detection

    /*--------------------------------- Props --------------------------------*/

    let {
        rows = 15,
        class: classString = '',
        onread = (d) => {},
        loopback = false,
        autoCLRF = true
    }: TerminalProps = $props();

    let container: HTMLElement;
    let terminal: Terminal;
    let fitAddon: FitAddon;
    let resizeObserver: ResizeObserver | null = null;

    /*-------------------------------- Methods -------------------------------*/

    function setTheme(t: Theme) {
        if (t == 'light') {
            terminal.options.theme = {
                foreground: '#2d2d2d',
                cursor: '#2d2d2d',
                background: '#00000000'
            };
        } else {
            terminal.options.theme = {
                foreground: '#f5f5f5',
                cursor: '#f5f5f5',
                background: '#00000000'
            };
        }
    }

    function read(data: string) {
        if (autoCLRF) data = data.split('\r', -1).join('\r\n'); // Chunked data
        if (autoCLRF && data === '\r') data = '\r\n'; // single character
        onread(data);

        if (loopback) {
            if (data === String.fromCharCode(127)) data = '\b \b'; // Patch to let backspace work
            terminal?.write(data);
        }
    }

    export function write(data: string, escape?: number) {
        if (escape) terminal?.write(`\x1b[${escape}m${data}\x1b[0m`);
        else terminal?.write(data);
    }

    /*--------------------------- Lifecycle Hooks ----------------------------*/

    onMount(async () => {
        // Load client-side only (library not SSR-friendly)
        const { Terminal } = await import('@xterm/xterm');
        const { FitAddon } = await import('@xterm/addon-fit');
        const { WebglAddon } = await import('@xterm/addon-webgl');

        // Create Terminal
        terminal = new Terminal({
            theme: {
                background: '#00000000'
            },
            allowTransparency: true,
            convertEol: autoCLRF,
            cursorBlink: true,
            scrollback: 5000,
            fontFamily: 'JetBrains Mono',
            fontWeight: 500
        });

        fitAddon = new FitAddon();
        let webglAddon = new WebglAddon();
        webglAddon.onContextLoss((e) => {
            webglAddon.dispose();
        });

        // Initial render and populate
        terminal.loadAddon(fitAddon);
        terminal.loadAddon(webglAddon);
        terminal.open(container);
        terminal.onData(read);
        fitAddon.fit();
        if ($mode) setTheme($mode);

        // Redraw on size change
        resizeObserver = new ResizeObserver(function (entries) {
            fitAddon?.fit();
        });
        resizeObserver.observe(container);
    });

    onDestroy(() => {
        resizeObserver?.unobserve(container);
    });

    $effect(() => {
        terminal?.resize(terminal.cols, rows);
        terminal?.scrollToBottom();
    });

    $effect(() => {
        if (!$mode) return;
        if (!terminal) return;
        setTheme($mode);
    });
</script>

<div class={`console ${classString}`}>
    <div class="xterm-container" bind:this={container}></div>
</div>

<style>
    /* Terminal Styling */
    .console {
        width: 100%;
        height: 100%;
    }

    .xterm-container {
        margin: 1rem;
        height: 100%;
    }

    :global(.xterm-viewport)::-webkit-scrollbar {
        display: none;
    }
    :global(.xterm-viewport) {
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
    }
</style>
