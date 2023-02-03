/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export default {
    name: '@ergonode/authentication',
    order: 20,
    relations: [
        '@ergonode/core',
    ],
    aliases: {
        '@Authentication': '/',
    },
    plugins: [
        {
            ssr: true,
            src: './plugins/privilege',
        },
    ],
};
