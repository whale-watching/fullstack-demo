/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */

export const getAll = ({
    $axios,
    params = {
        limit: 9999,
        offset: 0,
        view: 'list',
        field: 'name',
        order: 'ASC',
    },
}) => $axios.$get('languages', {
    params,
});
