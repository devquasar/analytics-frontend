import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/Index.vue'),
    },
    {
        path: '/two',
        name: 'two',
        component: () => import('@/views/Two.vue'),
    },
    {
        path: '/three',
        name: 'three',
        component: () => import('@/views/Three.vue'),
    },
    {
        path: '/actions',
        name: 'actions',
        component: () => import('@/views/Actions.vue'),
    },
    {
        path: '/report',
        name: 'report',
        component: () => import('@/views/Report.vue'),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;