/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */

import {
    TYPES,
} from '@Workflow/defaults/conditionDesigner';

export function hasOptions(type) {
    return type === TYPES.SELECT || type === TYPES.MULTI_SELECT;
}
