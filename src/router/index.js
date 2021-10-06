import Vue from 'vue'
import VueRouter from 'vue-router'	

import HomePage from '../components/HomePage';
import ViewCollege from '../components/ViewCollege';
import ViewStudent from '../components/ViewStudent';


Vue.use(VueRouter)

const routes = [
        {
                path: '/',
                name: 'HomePage',
                component: HomePage
        },        {
                path: '/ViewCollege',
                name: 'ViewCollege',
                component: ViewCollege
        },
        {
                path: '/ViewStudent',
                name: 'ViewStudent',
                component: ViewStudent
        },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;