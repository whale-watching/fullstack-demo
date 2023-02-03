/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export const getTemplates = ({
    $axios,
    payload,
}) => $axios.$post('batch-action/templates', payload);
