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
        path: '/report/actions',
        name: 'actionsReport',
        component: () => import('@/views/ActionsReport.vue'),
    },
    {
        path: '/report/sessions',
        name: 'sessionsReport',
        component: () => import('@/views/SessionsReport.vue'),
    },
    {
        path: '/report/avg',
        name: 'avgReport',
        component: () => import('@/views/AverageReport.vue'),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;