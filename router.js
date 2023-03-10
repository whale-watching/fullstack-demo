
import Vue from 'vue';
import Router from 'vue-router';

import {
    extendRoutes,
    scrollBehavior,
    setLocalMiddlewares,
} from '~/.nuxt/routerHelper.modules';

Vue.use(Router);

export function createRouter() {
    const router = new Router({
        mode: 'history',
        base: '/',
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
        scrollBehavior,
        routes: extendRoutes(),
        fallback: false,
    });

    router.beforeEach(
        (to, from, next) => setLocalMiddlewares({
            to,
            from,
            next,
        }),
    );

    return router;
}
