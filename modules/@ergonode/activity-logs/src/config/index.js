/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export default {
    name: '@ergonode/activity-logs',
    order: 110,
    relations: [
        '@ergonode/core',
        '@ergonode/users',
    ],
    aliases: {
        '@ActivityLogs': '/',
    },
};
