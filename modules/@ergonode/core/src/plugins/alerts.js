/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export default ({
    app,
}, inject) => {
    inject('addAlert', (data = {}) => {
        app.store.dispatch('alert/addAlert', data);
    });
};
