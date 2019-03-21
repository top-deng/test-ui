import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 静态路由组件
export const staticRouterMap = [{
    path: '/test',
    component: () => import ('@/views/test'),
    hidden: true
  },
  { path: '*', redirect: '/test', hidden: true }
];
const router = new VueRouter({
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    },
    staticRouterMap
});

export default router;