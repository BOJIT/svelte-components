<!--
 * @file Terminal.svelte
 * @author James Bennion-Pedley
 * @brief Terminal Panel
 * @date 31/10/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<!-- TODO:
    - add proper resizing for buttons when window is small
    - add error message for is serial API not supported
    - add baud-rate picker
    - handle disconnect elegantly
    - Add option to register init hook
-->

<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    import { message } from '$lib/core';
    import { SearchableList } from '$lib/form';
    import { Container } from '$lib/layout';
    import { List, Dialog } from '$lib/smelte';
    import theme from '$lib/theme';
    import type { ThemeMode } from '$lib/theme/theme';

    import IconClose from '@svicons/ionicons-outline/close-circle.svelte';
    import IconElipsis from '@svicons/ionicons-outline/ellipsis-horizontal-circle.svelte';
    import IconListCircle from '@svicons/ionicons-outline/list-circle.svelte';
    import IconRefresh from '@svicons/ionicons-outline/refresh.svelte';

    /* XTermJS */
    import type { Terminal } from 'xterm';
    import 'xterm/css/xterm.css';

    /*------------------------------ Public API ------------------------------*/

    // Feed-through Container Props
    export let aspect: string | undefined;
    export let wide: boolean = false;

    // Terminal Props
    export let name = 'COMX';
    export let rows = 15;
    export let active = false;
    export let baud = 115200;
    export let interactive = true;

    // Send characters
    export async function send(data: string) {
        if (active) {
            await terminalInput(data);
        }
    }

    /*--------------------------------- State --------------------------------*/

    let menuVisible = false;

    let baudOptions = {
        '4800': {},
        '9600': {},
        '19200': {},
        '28800': {},
        '38400': {},
        '57600': {},
        '76800': {},
        '115200': {},
        '576000': {}
    };

    let tray = [
        {
            icon: IconRefresh,
            callback: refreshPorts
        },
        {
            icon: IconListCircle,
            callback: requestPort
        },
        {
            icon: IconElipsis,
            callback: () => {
                menuVisible = true;
            }
        }
    ];

    let trayActive = [
        {
            icon: IconRefresh,
            callback: refreshPorts
        },
        {
            icon: IconListCircle,
            callback: requestPort
        },
        {
            icon: IconClose,
            callback: closePort
        }
    ];

    const dispatch = createEventDispatcher();

    // Types
    type Port = {
        icon: string;
        text: string;
        port: SerialPort;
    };

    let container: HTMLElement;
    let terminal: Terminal;
    let resizeObserver: ResizeObserver | null = null;

    let ports: Port[] = [];
    let port: string | undefined = undefined;

    // Port stream handlers
    let port_readable: ReadableStreamDefaultReader<Uint8Array> | undefined = undefined;
    let port_writable: WritableStreamDefaultWriter<Uint8Array> | undefined = undefined;

    // Handle terminal row resizing
    $: {
        terminal?.resize(terminal.cols, rows);
        terminal?.scrollToBottom();
    }

    /*--------------------------- Helper Functions ---------------------------*/

    // Terminal Functions
    async function terminalInput(data: string) {
        if (interactive) {
            let enc = new TextEncoder();
            let u8 = enc.encode(data);
            await port_writable?.write(u8);
        }
    }

    function terminalOutput(data: any) {
        if (data.value !== undefined) {
            terminal.write(data.value);
            dispatch('recv', data.value);
            // Infinite promise stream
            port_readable?.read().then(terminalOutput);
        }
    }

    // Handle Theme
    function setTheme(t: ThemeMode) {
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
    theme.subscribe((t) => {
        if (terminal !== undefined) setTheme(t);
    });

    // Serial Port Functions
    async function refreshPorts() {
        if ('serial' in navigator) {
            let serial_ports = await navigator.serial.getPorts();
            ports = await Promise.all(
                serial_ports.map(async (sp: SerialPort, idx: number) => {
                    let info = sp.getInfo();
                    let name = '';
                    if ('usbProductId' in info) {
                        name = `${idx + 1} - VID: ${info.usbVendorId}, PID: ${info.usbProductId}`;
                    } else {
                        name = `${idx + 1} - Unknown Device`;
                    }

                    return {
                        icon: 'cable',
                        text: name,
                        port: sp
                    };
                })
            );
        }
    }

    async function requestPort() {
        if ('serial' in navigator) {
            try {
                let port = await navigator.serial.requestPort();
                console.log(port);
                refreshPorts();
            } catch (err) {
                // No need to do anything
            }
        }
    }

    async function openPort() {
        let active_port = ports.find((p: Port) => p.text === port);

        if (active_port !== undefined) {
            try {
                await active_port.port.open({
                    baudRate: baud
                });
            } catch (e) {
                message.push({
                    type: 'error',
                    title: 'Port Open Failed!',
                    message: 'Failed to open Serial Port!',
                    timeout: 5
                });

                console.error(e);
                return false;
            }

            // Assume success, set up read and write hooks
            port_readable = active_port.port.readable?.getReader();
            port_writable = active_port.port.writable?.getWriter();
            port_readable?.read().then(terminalOutput);

            active = true;
            return true;
        } else {
            return false;
        }
    }

    async function closePort() {
        let active_port = ports.find((p: Port) => p.text === port);

        if (active_port !== undefined) {
            await port_readable?.cancel();
            await port_writable?.close();
            await active_port.port.close();
            active = false;
        }
    }

    /*--------------------------- Lifecycle Hooks ----------------------------*/

    onMount(async () => {
        // XTerm cannot be server-side rendered
        const { Terminal } = await import('xterm');
        const { FitAddon } = await import('xterm-addon-fit');
        const { WebglAddon } = await import('xterm-addon-webgl');

        // Create Terminal
        terminal = new Terminal({
            theme: {
                background: '#00000000'
            },
            allowTransparency: true,
            convertEol: true,
            rows: rows
        });

        let fitAddon = new FitAddon();
        let webglAddon = new WebglAddon();
        webglAddon.onContextLoss((e) => {
            webglAddon.dispose();
        });

        terminal.loadAddon(fitAddon);
        terminal.loadAddon(webglAddon);
        terminal.open(container);

        terminal.onData(terminalInput);

        fitAddon.fit();

        // Redraw on size change
        resizeObserver = new ResizeObserver(function (entries) {
            fitAddon?.fit();
        });
        resizeObserver.observe(container);

        // Check if we need to show overlay
        if (port !== undefined) {
            // Serial Init goes here!
            if ((await openPort()) === true) {
                return;
            }
        }

        // Set up port scanning
        try {
            await refreshPorts();
            setInterval(refreshPorts, 3000); // TODO clear!
        } catch (err) {
            // Ignore - this just means we need a user interaction
        }
    });

    onDestroy(() => {
        resizeObserver?.unobserve(container);
    });
</script>

<Container bind:aspect {wide} tray={active ? trayActive : tray}>
    <div class="console">
        <div class="console-header" class:active>
            <h6>Terminal - {name}</h6>
            <hr />
        </div>
        <div class="console-overlay" class:active>
            <h6>Baud Rate: <span class="baud">{baud}</span></h6>
            <hr />
            {#if ports.length == 0}
                <h6>[No Available Ports]</h6>
            {:else}
                <List bind:value={port} on:change={openPort} items={ports} />
            {/if}
        </div>
        <div class="xterm-container" class:active bind:this={container} />
    </div>
</Container>

<Dialog bind:value={menuVisible}>
    <div slot="title" class="title">Baud Rate</div>
    <SearchableList
        items={baudOptions}
        on:select={(e) => {
            baud = parseInt(e.detail);
            menuVisible = false;
        }}
    />
</Dialog>

<style>
    .console-overlay {
        margin: 0.5rem;
    }

    .console-overlay > :global(ul) {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
    }

    .console-overlay.active {
        display: none;
    }

    .console-header {
        display: none;
        margin: 0.5rem;
    }

    .console h6 {
        font-size: 0.8em;
        color: var(--color-gray-600);
        padding: 0.2em;
        margin-top: 3rem;
        margin-bottom: 0;
        text-align: center;
    }

    .console hr {
        border-color: var(--color-gray-400);
        margin: 0.25rem;
    }

    .console-header.active {
        display: block;
    }

    /* Theme */

    :global(.mode-dark) h6 {
        color: var(--color-gray-300);
    }

    :global(.mode-dark) hr {
        border-color: var(--color-gray-600);
    }

    /* Terminal Styling */

    .xterm-container {
        visibility: hidden;
        margin: 0 1rem;
    }

    .xterm-container.active {
        visibility: visible;
    }

    :global(.xterm-viewport)::-webkit-scrollbar {
        display: none;
    }
    :global(.xterm-viewport) {
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
    }

    .baud {
        color: var(--color-primary-300);
    }

    .title {
        min-width: 40rem;
    }

    @media (max-width: 768px) {
        .title {
            min-width: 0;
            width: 80vw;
        }
    }
</style>
