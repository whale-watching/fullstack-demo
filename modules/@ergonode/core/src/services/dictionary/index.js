/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */

export const get = ({
    $axios,
    path,
    config,
}) => $axios.$get(path, config);
