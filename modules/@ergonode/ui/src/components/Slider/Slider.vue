/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <div class="slider">
        <div
            class="slider__sphere"
            :style="spherePositionStyle"
            @mousedown="onInitResize"
            @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave" />
        <div
            ref="tracker"
            class="slider__tracker"
            @click="onClick" />
        <div
            :style="progressStyle"
            class="slider__progress" />
    </div>
</template>

<script>

const registerResizeEventListeners = () => import('@UI/models/resize/registerResizeEventListeners');
const unregisterResizeEventListeners = () => import('@UI/models/resize/unregisterResizeEventListeners');

export default {
    name: 'Slider',
    props: {
        /**
         * Component value
         */
        value: {
            type: Number,
            default: 0,
            validator: value => value <= 100,
        },
    },
    data() {
        return {
            width: 0,
            xPos: 0,
            maxValue: 100,
            sphereSize: 16,
        };
    },
    computed: {
        transformValue() {
            if (this.value >= this.maxValue) {
                return this.width - this.sphereSize;
            }

            return this.width * (this.value / this.maxValue);
        },
        progressStyle() {
            return {
                transform: `scaleX(${this.transformValue})`,
            };
        },
        spherePositionStyle() {
            return {
                transform: `translateX(${this.transformValue}px)`,
            };
        },
    },
    mounted() {
        const {
            width, x,
        } = this.$refs.tracker.getBoundingClientRect();
        this.width = width;
        this.xPos = x;
    },
    methods: {
        onInitResize() {
            registerResizeEventListeners().then((response) => {
                response.default(this.onResize, this.onStopResizing);
            });
        },
        onClick(event) {
            this.$emit('input', this.getProgress(event.pageX));
        },
        onMouseEnter(event) {
            event.target.classList.add('grid-column--hovered');
        },
        onMouseLeave(event) {
            event.target.classList.remove('grid-column--hovered');
        },
        onResize(event) {
            if (this.xPos < event.pageX) {
                this.$emit('input', this.getProgress(event.pageX));
            }
        },
        onStopResizing() {
            unregisterResizeEventListeners().then((response) => {
                response.default(this.onResize, this.onStopResizing);
            });
        },
        getProgress(pageX) {
            const fixedXOffset = pageX - this.xPos - (this.sphereSize / 2);

            return Math.round((fixedXOffset / this.width) * this.maxValue);
        },
    },
};
</script>

<style lang="scss" scoped>
    .slider {
        position: relative;
        display: flex;
        align-items: center;

        &__progress, &__tracker {
            position: absolute;
            height: 2px;
        }

        &__progress {
            width: 1px;
            transform-origin: left;
            background-color: $GREEN;
        }

        &__tracker {
            width: 100%;
            background-color: $GREY;
        }

        &__sphere {
            z-index: $Z_INDEX_LVL_1;
            width: 16px;
            height: 16px;
            background-color: $GREEN;
            border-radius: 50%;
            cursor: grab;

            &.hover {
                box-shadow: $ELEVATOR_2_DP;
            }
        }
    }
</style>
