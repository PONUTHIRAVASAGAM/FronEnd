import Vue from 'vue'
import VueRouter from 'vue-router'	

import HomePage from '../components/HomePage';
import ViewCollege from '../components/ViewCollege';
import ViewStudent from '../components/ViewStudent';
import AfterAdmin from '../components/AfterAdmin';
import AfterCollege from '../components/AfterCollege';
import AfterStudent from '../components/AfterStudent';
import ApproveCollege from '../components/ApproveCollege';
import Faculty from '../components/Faculty'


Vue.use(VueRouter)

const routes = [
        {
                path: '/',
                name: 'HomePage',
                component: HomePage
        },       
		{
                path: '/ViewCollege',
                name: 'ViewCollege',
                component: ViewCollege
        },
        {
                path: '/ViewStudent',
                name: 'ViewStudent',
                component: ViewStudent
        },
		{
                path: '/AfterAdmin',
                name: 'AfterAdmin',
                component: AfterAdmin
        },
		{
                path: '/AfterCollege',
                name: 'AfterCollege',
                component: AfterCollege
        },
		{
                path: '/AfterStudent',
                name: 'AfterStudent',
                component: AfterStudent
        },
		{
                path: '/AfterAdmin/ApproveCollege',
                name: 'ApproveCollege',
                component: ApproveCollege
        },
		{
                path: '/Faculty',
                name: 'Faculty',
                component: Faculty
        },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;