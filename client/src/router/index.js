import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../view/Home.vue';
import About from '../view/About.vue';
import Contact from '../view/Contact.vue';
import API from '../view/API.vue';
import Own from '../view/Own.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/api',
        component: API
    },
    {
        path: '/own',
        component: Own
    }
];

const router = new VueRouter({
    routes
});


export default router;