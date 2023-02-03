/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export function loginLayoutMiddleware({
    store,
    redirect,
}) {
    if (store.state.authentication.isLogged) {
        return redirect('/dashboard');
    }
    return null;
}
