/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <div :class="['element-content', {'element-content--disabled': disabled}]">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'ElementContentBase',
    props: {
        disabled: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
    .element-content {
        display: flex;
        flex: 1;
        height: 100%;
        padding-left: 10px;

        &--disabled {
            resize: none;
        }
    }
</style>
