/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <div class="placeholder">
        <div class="horizontal-wrapper">
            <img
                class="image"
                src="@UI/assets/images/placeholders/error-pages/404.svg">
            <div class="navigation-section">
                <h1 class="navigation-section__header">
                    Access denied
                </h1>
                <p
                    class="navigation-section__description">
                    You do not have permission to view this page.
                </p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Error403',
};
</script>

<style lang="scss" scoped>
    .placeholder {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;

        .horizontal-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .image {
                margin-right: 64px;
            }

            .navigation-section {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 285px;

                &__header {
                    color: $GREEN;
                    font: bold 56px/56px "Inter UI";
                }

                &__description {
                    margin: 8px 0 16px;
                    color: $GRAPHITE_DARK;
                    font: $FONT_MEDIUM_16_24;
                }

                &__header, &__description {
                    text-align: center;
                }
            }
        }

        .error-plug {
            justify-self: flex-start;
        }
    }
</style>
