<script lang="ts">
    import App from "$lib/core/App/App.svelte";
    import Button from "$lib/smelte/components/Button/Button.svelte";
    import NavBar from "$lib/layout/NavBar/NavBar.svelte";
    import Tabs from "$lib/widgets/Tabs/Tabs.svelte";
    import type { NavItem } from "$lib/layout/NavBar/NavBar.svelte";
    import Dialog from "$lib/smelte/components/Dialog/Dialog.svelte";
    import Footer from "$lib/layout/Footer/Footer.svelte";
    import ThemeSelector from "$lib/widgets/ThemeSelector/ThemeSelector.svelte";

    import Theme, { palette } from "$lib/theme";

    import logo from "$lib/test/logo.png";

    // Icons
    import PlayOutline from "@svicons/ionicons-outline/play.svelte";
    import StatsChartOutline from "@svicons/ionicons-outline/stats-chart.svelte";
    import DocumentOutline from "@svicons/ionicons-outline/document.svelte";
    import FolderOpenOutline from "@svicons/ionicons-outline/folder-open.svelte";
    import CopyOutline from "@svicons/ionicons-outline/copy.svelte";
    import OptionsOutline from "@svicons/ionicons-outline/options.svelte";
    import MenuOutline from "@svicons/ionicons-outline/menu.svelte";

    let mode = Theme.Mode;

    function toggleTheme() {
        if($mode == 'light')
            $mode = 'dark';
        else
            $mode = 'light';
    }

    let items: NavItem[] = [
        {
            type: "button",
            color:  "green",
            icon: PlayOutline,
        },
        {
            type: "button",
            color:  "orange",
            icon: StatsChartOutline,
        },
        {
            type: "separator",
            visibility: "desktop",
        },
        {
            type: "button",
            color: "transparent",
            icon: DocumentOutline,
            visibility: "desktop",
        },
        {
            type: "button",
            color: "transparent",
            icon: FolderOpenOutline,
            visibility: "desktop",
        },
        {
            type: "button",
            color: "transparent",
            icon: CopyOutline,
            visibility: "desktop",
            callback: () => {
                showDialog = true;
            }
        },
        {
            type: "separator",
        },
        {
            type: "button",
            color: "transparent",
            icon: OptionsOutline,
            visibility: "desktop",
            callback: toggleTheme
        },
        {
            type: "button",
            color: "transparent",
            icon: MenuOutline,
            visibility: "mobile",
        },
    ];

    let showDialog = false;
    let tabIndex = 0;
</script>

<Dialog bind:value={showDialog}>
    <h5 slot="title">Settings</h5>
    <Tabs tabs={[
        "Test",
        "TFA",
    ]} bind:index={tabIndex}/>

    {#if tabIndex == 0}
        <p>Test Message</p>
    {/if}

    {#if tabIndex == 1}
        <p>Tab formatting</p>
    {/if}

    <div slot="actions">
        <Button text on:click={() => showDialog = false}>Disagree</Button>
        <Button text on:click={() => showDialog = false}>Agree</Button>
    </div>
</Dialog>

<ThemeSelector />

<App theme={palette.midnight}>
    <NavBar title="ploTTY" logo={logo} logoLink="https://github.com" items={items}/>

    <slot />

    <Footer buttons={[
        {
            label: "A1",
            icon: PlayOutline,
            callback: () => {
                console.log("HEY");
            }
        },
        {
            label: "B1",
            icon: FolderOpenOutline,
            shape: "square"
        },
        {
            label: "C1",
            icon: StatsChartOutline
        },
    ]}/>
</App>


