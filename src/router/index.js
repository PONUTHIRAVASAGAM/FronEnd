import Vue from 'vue'
import VueRouter from 'vue-router'	

//import StudentPage from '../components/StudentPage'
import HomePage from '../components/HomePage';
import ViewCollege from '../components/ViewCollege';


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
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;