/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
import {
    nuxtServerInit,
} from '@Core/store/initial';

export const actions = {
    async nuxtServerInit(ctx) {
        await nuxtServerInit.call(this, ctx);
    },
};
