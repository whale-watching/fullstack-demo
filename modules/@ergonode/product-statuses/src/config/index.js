/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export default {
    name: '@ergonode/product-statuses',
    order: 90,
    relations: [
        '@ergonode/core',
        '@ergonode/products',
    ],
    aliases: {
        '@Statuses': '/',
    },
};
