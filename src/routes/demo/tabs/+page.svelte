<!--
 * @file +page.svelte
 * @author James Bennion-Pedley
 * @brief Tabs inline demo
 * @date 10/02/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang='ts'>
    /*-------------------------------- Imports -------------------------------*/

    import Button from "$lib/smelte/components/Button/Button.svelte";
    import Tabs from "$lib/widgets/Tabs/Tabs.svelte";

    /*--------------------------------- Props --------------------------------*/

    const items = [
        { label: "Line 1"},
        { label: "Line 2"},
        { label: "Line 3"},
    ];

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/

</script>

<h1>Tabs Demo</h1>

<Tabs tabs={items}>
    <div class="tab">
        <p>This is tab 1</p>
        <Button>TEST</Button>
    </div>

    <div class="tab">
        <p>This is tab 2</p>
        <p>This is tab 2</p>
        <p>This is tab 2</p>
        <p>This is tab 2</p>
    </div>

    <div class="tab">
        <p>This is tab 3</p>
    </div>
</Tabs>

<h2>Below</h2>


