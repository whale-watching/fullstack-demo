/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <div class="notification-list-no-data-placeholder">
        <Infographic
            class="notification-list-no-data-placeholder__infographic"
            :bg-url="bgUrl" />
        <div class="notification-list-no-data-placeholder__description">
            <span
                class="notification-list-no-data-placeholder__title"
                v-text="$t('@Notifications.notification.components.NotificationListNoDataPlaceholder.noActions')" />
            <span
                class="notification-list-no-data-placeholder__subtitle"
                v-text="$t('@Notifications.notification.components.NotificationListNoDataPlaceholder.info')" />
        </div>
    </div>
</template>

<script>
import Infographic from '@Authentication/components/Infographic/Infographic';

export default {
    name: 'NotificationListNoDataPlaceholder',
    components: {
        Infographic,
    },
    computed: {
        bgUrl() {
            return require('@Notifications/assets/images/infographicts/no_data_placeholder.svg');
        },
    },
};
</script>

<style lang="scss" scoped>
    .notification-list-no-data-placeholder {
        display: flex;
        align-self: center;
        flex-direction: column;
        align-items: center;
        width: 320px;
        margin-top: 40px;

        &__infographic {
            width: 280px;
            height: 280px;
        }

        &__description {
            display: flex;
            flex-direction: column;
            margin-top: 24px;
            color: $GRAPHITE_DARK;
        }

        &__title {
            font: $FONT_SEMI_BOLD_24_32;
        }

        &__subtitle {
            margin-top: 8px;
            font: $FONT_MEDIUM_14_20;
        }
    }
</style>
