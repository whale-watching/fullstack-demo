/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
import {
    ROUTE_NAME,
} from '@Dashboard/config/routes';

export default {
    extendMethods: {
        '@Authentication/components/Forms/LoginCredentialsForm/redirectName': () => [
            ROUTE_NAME.DASHBOARD,
        ],
    },
};
