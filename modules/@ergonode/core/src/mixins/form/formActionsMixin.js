/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */

export default {
    props: {
        submitTitle: {
            type: String,
            default: '',
        },
        proceedTitle: {
            type: String,
            default: '',
        },
        isSubmitting: {
            type: Boolean,
            default: false,
        },
        isProceeding: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onSubmit() {
            this.$emit('submit');
        },
        onProceed() {
            this.$emit('proceed');
        },
    },
};
