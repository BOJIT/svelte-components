<!--
 * @file Container.svelte
 * @author James Bennion-Pedley
 * @brief Generic inline container that can be fullscreened
 * @date 30/12/2024
 *
 * @copyright Copyright (c) 2024
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import * as Dialog from '$lib/components/ui/dialog/index';

    /*--------------------------------- Props --------------------------------*/

    let fullscreen: boolean = $state(false);

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

<div>INLINE CONTAINER</div>

<Dialog.Root bind:open={fullscreen}>
    <Dialog.Content showClose={false}></Dialog.Content>
</Dialog.Root>

<style>
</style>
