<!--
 * @file Tabs.svelte
 * @author James Bennion-Pedley
 * @brief Simple Tab Element - either uses links or embedded components
 * @date 12/01/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { onMount } from 'svelte';

    import { swatchCSS } from '$lib/utils/theme';
    import { Link } from '$lib/components/ui/link';
    import { goto } from '$app/navigation';

    import { cn } from '$lib/utils';

    import { draggable, droppable, type DragDropState } from '@thisux/sveltednd';

    /*--------------------------------- Props --------------------------------*/

    type Tab = {
        label: string;
        link?: string; // Link must be relative to the tab component
    };

    type DropEvent = {
        source: number;
        target: number;
        internal: boolean;
        context: any;
    };

    interface TabsProps {
        tabs: string[] | Tab[];
        ref?: HTMLDivElement | null;
        children?: any;
        currentPath?: string | null; // path from page.route.id
        basePath?: string; // Base of Tab-based Routing
        index?: number; // Manually set tab index (not in path mode)
        fade?: boolean;
        colourOffset?: number;
        drag?: boolean;
        dragContext?: any;
        onIndexChange?: (idx: number) => void;
        onDropEvent?: (evt: DropEvent) => void;
        class?: string;
    }

    let {
        tabs,
        ref = $bindable(null),
        children,
        currentPath,
        basePath = '',
        index = $bindable(currentPath ? -1 : 0),
        fade = false,
        colourOffset = 0,
        drag = false,
        dragContext = null,
        onIndexChange = () => {},
        onDropEvent = () => {},
        class: className,
        ...restProps
    }: TabsProps = $props();

    /*-------------------------------- Methods -------------------------------*/

    /* Callback for tab click event */
    function handleClick(idx: number) {
        index = idx;

        // Update tabline
        tabLine.removeAttribute('style');
        tabLine.style.cssText = swatchCSS(idx);
    }

    let dragInitiated: boolean = $state(false);

    function handleDrop(state: DragDropState<{ id: string }>) {
        if (!state.targetContainer) return;

        const evt: DropEvent = {
            source: parseInt(state.sourceContainer),
            target: parseInt(state.targetContainer),
            internal: dragInitiated,
            context: dragContext
        };

        onDropEvent(evt);
    }

    let tabLine: HTMLElement;
    let tabRoot: HTMLElement;
    let tabParent: HTMLElement;

    onMount(() => {
        if (!currentPath || tabs.length == 0) return;

        if (basePath.replace(/\/$/, '') === currentPath.replace(/\/$/, ''))
            goto(`${basePath}${tabs[0].link}`); // Redirect fall-through

        index = tabs.findIndex((t) => currentPath.startsWith(`${basePath}${t.link}`));
    });

    let dragAction = $derived(drag ? draggable : () => {});
    let dropAction = $derived(drag ? droppable : () => {});

    $effect(() => {
        if (!currentPath || tabs.length == 0) return;

        index = tabs.findIndex((t) => currentPath.startsWith(`${basePath}${t.link}`));
    });

    $effect(() => {
        if (!tabRoot) return;

        // All tab children
        let tabSlots = tabRoot.querySelectorAll('div.tab');
        tabSlots.forEach((t) => t.classList.remove('active'));
        if (tabSlots[index] !== undefined) {
            setTimeout(() => {
                tabSlots[index].classList.add('active');
            }, 50);
        }
    });

    $effect(() => {
        onIndexChange(index);
    });
</script>

<svelte:window
    on:keydown={(event: KeyboardEvent) => {
        if (!tabParent || !tabParent.contains(document.activeElement)) return;

        if ((!event.shiftKey && event.key === 'Tab') || event.key === 'ArrowRight') {
            index = index === tabs.length - 1 ? 0 : index + 1;
        } else if ((event.shiftKey && event.key === 'Tab') || event.key === 'ArrowLeft') {
            index = index === 0 ? tabs.length - 1 : index - 1;
        } else return;

        event.preventDefault();
    }}
/>

<div class={cn('root-el', className)} bind:this={ref}>
    <div>
        <ul class="tabs" bind:this={tabParent}>
            <!-- Render each tab - updates when the list updates -->
            {#each tabs as tab, idx}
                <Link
                    href={typeof tab == 'string'
                        ? undefined
                        : tab.link
                          ? `${basePath}${tab.link}`
                          : undefined}
                >
                    <button
                        use:dragAction={{
                            container: idx.toString(),
                            dragData: {},
                            callbacks: {
                                onDragStart: (state: DragDropState) => (dragInitiated = true),
                                onDragEnd: (state: DragDropState) => (dragInitiated = false)
                            }
                        }}
                        use:dropAction={{
                            container: idx.toString(),
                            callbacks: { onDrop: handleDrop }
                        }}
                        style={swatchCSS(idx + colourOffset)}
                        class="tab"
                        class:is-active={idx == index}
                        onclick={() => handleClick(idx)}
                        onkeypress={() => handleClick(idx)}
                        {...restProps}
                    >
                        <h6 class="unselectable">{typeof tab == 'string' ? tab : tab.label}</h6>
                    </button>
                </Link>
            {/each}
            <div
                class="flex-grow"
                use:dropAction={{
                    container: tabs.length.toString(),
                    callbacks: { onDrop: handleDrop }
                }}
            ></div>
        </ul>
        <hr bind:this={tabLine} class="tabline" style={swatchCSS(index + colourOffset)} />
    </div>

    <div class="tabroot" class:fade bind:this={tabRoot}>
        {@render children?.()}
    </div>
</div>

<style>
    .root-el {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .tabs {
        flex: 0 0 auto;
        overflow-x: scroll;
        scrollbar-width: none;
        display: flex;
        gap: 0.3rem;
        padding: 0.3rem;
    }

    .tabs::-webkit-scrollbar {
        display: none;
    }

    button {
        padding: 0.2rem 0.6rem;
        border-radius: 0.5rem;
        background-color: hsl(var(--accent-highlight));
        list-style-type: none;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: hsl(var(--accent));
    }

    button:focus {
        outline: none;
    }

    button.is-active {
        background-color: var(--swatch-base);
        color: var(--swatch-text);
    }

    .tabline {
        border-color: var(--swatch-base);
        margin: 0.2rem 0rem;
        transition: border-color 0.5s;
    }

    h6 {
        margin-bottom: 0rem !important;
    }

    .tabs :global(a) {
        text-decoration: none !important;
        color: inherit !important;
    }

    .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }

    /* Tab anchor */
    .tabroot {
        flex: 1 0 auto;
        display: grid;
    }

    .tabroot > :global(div.tab) {
        grid-column: 1;
        grid-row: 1;
        top: 0;
        width: 100%;
        opacity: 0;
        pointer-events: none;
    }

    .tabroot.fade > :global(div.tab) {
        transition: opacity 0.3s;
    }

    .tabroot > :global(div.tab.active) {
        opacity: 100;
        pointer-events: auto;
    }

    :global(.dragging) {
        @apply opacity-50 shadow-lg ring-1 ring-blue-400;
    }

    :global(.drag-over) {
        border-left: 3px solid rgb(96 165 250);
    }
</style>
