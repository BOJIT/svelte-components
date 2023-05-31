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
    import { onDestroy, onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    import { message } from "$lib/core";
    import { Container } from "$lib/layout";
    import Button from "$lib/smelte/components/Button/Button.svelte";
    import List from "$lib/smelte/components/List/List.svelte";
    import theme from "$lib/theme";
    import type { ThemeMode } from "$lib/theme/theme";

    import IconElipsis from "@svicons/ionicons-outline/ellipsis-horizontal-circle.svelte";
    import IconListCircle from "@svicons/ionicons-outline/list-circle.svelte";
    import IconRefresh from "@svicons/ionicons-outline/refresh.svelte";

    /* XTermJS */
    // import { Terminal } from 'xterm';
    // import { FitAddon } from 'xterm-addon-fit';
    // import "xterm/css/xterm.css"

    const dispatch = createEventDispatcher();

    // Types
    type Port = {
        icon: string;
        text: string;
        port: SerialPort;
    };

    export let name = "COMX";
    // export let rows = 15;
    export let active = false;
    export let baud = 115200;
    export let interactive = true;

    let container: HTMLElement;
    // let terminal: Terminal;
    // let fitAddon: FitAddon;

    let ports: Port[] = [];
    let port: string | undefined = undefined;

    // Port stream handlers
    let port_readable: ReadableStreamDefaultReader<Uint8Array> | undefined =
        undefined;
    let port_writable: WritableStreamDefaultWriter<Uint8Array> | undefined =
        undefined;

    // Handle terminal row resizing
    $: {
        // terminal?.resize(terminal.cols, rows);
        // terminal?.scrollToBottom();
    }

    // Handle window resizing
    function terminalFit() {
        // fitAddon?.fit();
    }

    // Send from outside component
    export async function send(data: string) {
        if (active) {
            terminalInput(data);
        }
    }

    // Terminal Functions
    async function terminalInput(data: string) {
        if (interactive) {
            let enc = new TextEncoder();
            let u8 = enc.encode(data);
            console.log(u8);
            await port_writable?.write(u8);
        }
    }

    function terminalOutput(data: any) {
        // terminal.write(data.value);

        dispatch("recv", data.value);
        // Infinite promise stream
        port_readable?.read().then(terminalOutput);
    }

    // Handle Theme
    function setTheme(t: ThemeMode) {
        // if(t == 'light') {
        //     terminal.options.theme = {
        //         foreground: "#2d2d2d",
        //         cursor: "#2d2d2d",
        //         background: '#00000000',
        //     };
        // } else {
        //     terminal.options.theme = {
        //         foreground: "#f5f5f5",
        //         cursor: "#f5f5f5",
        //         background: '#00000000',
        //     };
        // }
    }
    theme.subscribe((t) => {
        // if(terminal !== undefined)
        //     setTheme(t);
    });

    // Serial Port Functions(
    function launchSettings() {
        console.error("Not Implemented!");
    }

    async function refreshPorts() {
        if ("serial" in navigator) {
            let serial_ports = await navigator.serial.getPorts();
            ports = await Promise.all(
                serial_ports.map(async (sp: SerialPort, idx: number) => {
                    let info = sp.getInfo();
                    let name = "";
                    if ("usbProductId" in info) {
                        name = `${idx + 1} - VID: ${info.usbVendorId}, PID: ${
                            info.usbProductId
                        }`;
                    } else {
                        name = `${idx + 1} - Unknown Device`;
                    }

                    return {
                        icon: "cable",
                        text: name,
                        port: sp,
                    };
                })
            );
        }
    }

    async function requestPort() {
        if ("serial" in navigator) {
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
                    baudRate: baud,
                });
            } catch (e) {
                message.push({
                    type: "error",
                    title: "Port Open Failed!",
                    message: "Failed to open Serial Port!",
                    timeout: 5,
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

    onMount(async () => {
        // Create Terminal
        // terminal = new Terminal({
        //     theme: {
        //         background: '#00000000',
        //     },
        //     allowTransparency: true,
        //     convertEol: true,
        //     rows: rows,
        // });

        // fitAddon = new FitAddon();
        // terminal.loadAddon(fitAddon);
        // terminal.open(container);
        // terminalFit();
        // window.addEventListener('resize', terminalFit);
        // terminal.onData(terminalInput);

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
        // window?.removeEventListener('resize', terminalFit);
    });
</script>

<Container
    wide
    tray={[
        {
            icon: IconRefresh,
            callback: refreshPorts,
        },
        {
            icon: IconListCircle,
            callback: requestPort,
        },
        {
            icon: IconElipsis,
            callback: launchSettings,
        },
    ]}
>
    <div class="console">
        <h6>Terminal - {name}</h6>
        <hr />
        <div class="xterm-container" bind:this={container} />
        {#if !active}
            <div class="serial-overlay">
                {#if ports.length == 0}
                    <h6>[No Available Ports]</h6>
                {:else}
                    <List
                        bind:value={port}
                        on:change={openPort}
                        items={ports}
                    />
                {/if}
            </div>
        {/if}
    </div>
</Container>

<style>
    .serial-overlay {
        background-color: #f5f2f0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1em;
    }

    .serial-overlay > :global(ul) {
        padding-left: 0px;
        padding-right: 0px;
    }

    .console > * {
        margin: 0.5rem;
        padding-top: 3.5rem;
    }

    h6 {
        font-size: 0.8em;
        color: var(--color-gray-600);
        padding: 0.2em;
        text-align: center;
    }

    hr {
        border-color: var(--color-gray-400);
        padding-bottom: 0.5em;
    }

    :global(.mode-dark) .serial-overlay {
        background-color: #2d2d2d;
    }

    :global(.mode-dark) h6 {
        color: var(--color-gray-300);
    }

    :global(.mode-dark) hr {
        border-color: var(--color-gray-600);
    }

    :global(.xterm-viewport)::-webkit-scrollbar {
        display: none;
    }
    :global(.xterm-viewport) {
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
    }
</style>
