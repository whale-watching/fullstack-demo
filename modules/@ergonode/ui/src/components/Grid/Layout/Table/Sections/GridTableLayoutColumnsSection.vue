/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <div class="grid-table-layout-columns-section">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'GridTableLayoutColumnsSection',
};
</script>

<style lang="scss" scoped>
    .grid-table-layout-columns-section {
        position: relative;
        display: grid;
        flex: 1 1 auto;
    }
</style>
