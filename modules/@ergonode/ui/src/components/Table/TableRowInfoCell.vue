/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <span
        class="table-row-info-cell"
        v-text="title" />
</template>

<script>
export default {
    name: 'TableRowInfoCell',
    props: {
        /**
         * The title of the component
         */
        title: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" scoped>
    .table-row-info-cell {
        color: $GRAPHITE_DARK;
        font: $FONT_MEDIUM_12_16;
        text-align: left;
    }
</style>
