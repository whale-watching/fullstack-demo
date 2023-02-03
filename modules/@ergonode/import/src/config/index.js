/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export default {
    name: '@ergonode/import',
    order: 180,
    relations: [
        '@ergonode/core',
        '@ergonode/notifications',
    ],
    aliases: {
        '@Import': '/',
    },
};
