/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export async function defaultLayoutMiddleware({
    store,
    redirect,
}) {
    const {
        authentication,
    } = store.state;

    if (!authentication.isLogged) {
        return redirect('/');
    }

    return null;
}
