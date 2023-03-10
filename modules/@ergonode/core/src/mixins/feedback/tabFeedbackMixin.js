/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */

import {
    mapActions,
} from 'vuex';

export default {
    props: {
        scope: {
            type: String,
            default: '',
        },
        changeValues: {
            type: Object,
            default: () => ({}),
        },
        errors: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        ...mapActions('feedback', [
            'onError',
            'removeScopeErrors',
            'markChangeValuesAsSaved',
        ]),
    },
};
