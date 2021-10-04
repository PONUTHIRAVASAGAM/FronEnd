import Vue from 'vue'
import VueRouter from 'vue-router'	

//import StudentPage from '../components/StudentPage'
import HomePage from '../components/HomePage';

Vue.use(VueRouter)

const routes = [
        {
                path: '/',
                name: 'HomePage',
                component: HomePage
        },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;