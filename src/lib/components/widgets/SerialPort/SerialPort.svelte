<!--
 * @file SerialPort.svelte
 * @author James Bennion-Pedley
 * @brief Web Serial Port Icon
 * @date 02/01/2025
 *
 * @copyright Copyright (c) 2025
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { onMount } from 'svelte';

    import Plug from 'carbon-icons-svelte/lib/Plug.svelte';

    import { cn, notify } from '$lib/utils';
    import Button from '$lib/components/ui/button/button.svelte';

    /*--------------------------------- Props --------------------------------*/

    interface SerialPortProps {
        onRecv?: (chunk: Uint8Array) => void;
        onConnect?: () => void;
        onDisconnect?: () => void;
        baud?: number;
        connected?: boolean;
        vid?: number;
        pid?: number;
        class?: string;
    }

    let {
        onRecv,
        onConnect,
        onDisconnect,
        baud = 115200, // Will only "react" after a reconnect cycle
        connected = $bindable(false), // readonly
        vid,
        pid,
        class: className
    }: SerialPortProps = $props();

    let supported = $state(false);

    let port: SerialPort | null = null;
    let port_readable: ReadableStreamDefaultReader<Uint8Array> | undefined = undefined;
    let port_writable: WritableStreamDefaultWriter<Uint8Array> | undefined = undefined;

    /*-------------------------------- Methods -------------------------------*/

    async function connect() {
        if (!supported) return;

        if (port != null) disconnect();

        const filters = vid && pid ? [{ usbVendorId: vid, usbProductId: pid }] : [];

        // Check for any pre-registered ports
        let existing_ports = await navigator.serial.getPorts();
        existing_ports.forEach((p) => {
            p.getInfo().usbProductId === pid;
        });
        if (vid && pid)
            existing_ports = existing_ports.filter(
                (p) => p.getInfo().usbVendorId === vid && p.getInfo().usbProductId === pid
            );

        // Launch Request Dialogue is result is not pre-determined
        if (existing_ports.length === 1) port = existing_ports[0];
        else {
            try {
                port = await navigator.serial.requestPort({ filters: filters });
            } catch (error) {
                notify.notify({
                    title: 'Port Not Selected!',
                    type: 'warning',
                    description: 'Port not selected in dialogue: resetting to disconnected',
                    timeout: 5000
                });

                return;
            }
        }

        // Open Serial Port
        try {
            // Attempt to open and set up listeners
            await port.open({ baudRate: baud });
            port.addEventListener('disconnect', disconnect);

            // Assume success, set up read and write hooks
            port_readable = port.readable?.getReader();
            port_writable = port.writable?.getWriter();
            connected = true;

            // Put the readable iterator on the event loop
            setTimeout(async () => {
                try {
                    const data = await port_readable?.read();
                    if (data) recv(data);
                } catch (e) {
                    await disconnect();
                    notify.notify({
                        type: 'warning',
                        title: 'Buffer Overrun',
                        description: 'Try Opening the Serial Port Again',
                        timeout: 5
                    });
                }
            }, 0);

            onConnect?.();
        } catch (e) {
            await port.forget();
            disconnect();

            notify.notify({
                type: 'error',
                title: 'Port Open Failed!',
                description: 'Failed to open Serial Port!',
                timeout: 5000
            });
        }
        return;
    }

    async function disconnect() {
        if (port == null) return;
        try {
            await port_readable?.cancel();
            await port_writable?.close();
            await port.close();
            port.removeEventListener('disconnect', disconnect);
        } catch (e) {}
        port_readable = undefined;
        port_writable = undefined;
        connected = false;
        port = null;
        onDisconnect?.();
    }

    function recv(data: ReadableStreamReadResult<Uint8Array<ArrayBufferLike>>) {
        if (data.value === undefined) return;
        onRecv?.(data.value);
        port_readable?.read().then(recv);
    }

    export async function send(msg: Uint8Array) {
        if (port === null) return;
        await port_writable?.write(msg);
    }

    /*------------------------------- Lifecycle ------------------------------*/

    onMount(() => {
        supported = 'serial' in navigator;
    });
</script>

<Button
    disabled={!supported}
    variant="ghost"
    class={cn(
        `dark border transition-colors ${supported ? (connected ? 'border-red-500' : 'border-green-400') : 'border-gray-600'}`,
        className
    )}
    onclick={connected ? disconnect : connect}
>
    <Plug />
    <p class="!m-0">
        {supported ? (connected ? 'Disconnect' : 'Connect') : 'Unsupported'}
    </p>
</Button>
