/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
module.exports = {
    env: {
        test: { // test environment transforms
            presets: [
                '@babel/env',
            ],
            plugins: [
                'dynamic-import-node',
                '@babel/transform-runtime',
            ],
        },
    },
};
