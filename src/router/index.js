import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'	

import HomePage from '../components/HomePage';
import ViewCollege from '../components/ViewCollege';
import ViewStudent from '../components/ViewStudent';
import AfterAdmin from '../components/AfterAdmin';
import AfterCollege from '../components/AfterCollege';
import AfterStudent from '../components/AfterStudent';
import ApproveCollege from '../components/ApproveCollege';
import Faculty from '../components/Faculty'
import UploadArticle from '../components/UploadArticle'


Vue.use(VueRouter)
Vue.use(Vuelidate)

const routes = [
        {
                path: '/',
                name: 'HomePage',
                component: HomePage
        },       
		{
                path: '/AfterAdmin/ViewCollege',
                name: 'ViewCollege',
                component: ViewCollege,
                meta:{
                        requiresAuth:true,
                        role:'Admin'
                        }
        },
        {
                path: '/AfterAdmin/ViewStudent',
                name: 'ViewStudent',
                component: ViewStudent,
                meta:{
                        requiresAuth:true,
                        role:'Admin'
                               }
        },
		{
                path: '/AfterAdmin',
                name: 'AfterAdmin',
                component: AfterAdmin,
                meta:{
                        requiresAuth:true,
                        role:'Admin'

                               }
        },
		{
                path: '/AfterCollege',
                name: 'AfterCollege',
                component: AfterCollege,
                meta:{
                        requiresAuth:true,
                        role:'College'
                               }
        },
		{
                path: '/AfterStudent',
                name: 'AfterStudent',
                component: AfterStudent,
                meta:{
                        requiresAuth:true,
                        role:'Student'
                               }
        },
		{
                path: '/AfterAdmin/ApproveCollege',
                name: 'ApproveCollege',
                component: ApproveCollege,
                meta:{
                        requiresAuth:true,
                        role:'Admin'
                               }
        },
        {
                path: '/AfterCollege/UploadArticle',
                name: 'UploadArticle',
                component: UploadArticle,
                meta:{
                        requiresAuth:true,
                        role:'College'
                               }
        },
		{
                path: '/AfterCollege/Faculty',
                name: 'Faculty',
                component: Faculty,
                meta:{
                        requiresAuth:true,
                        role:'College'
                               }
        },
];

const router = new VueRouter({
        mode: 'history',
        // base: process.env.BASE_URL,
        routes
      });
      router.beforeEach((to,from,next)=>{
        if((to.meta.requiresAuth) && (to.meta.role ==='Admin')){
                if(localStorage.getItem('status')=='Verified' && localStorage.getItem('role')=='Admin')
               
                {
                       next();
                }
                else{
                        router.push({name:'Admin'})
                }
              }
               else if((to.meta.requiresAuth) && (to.meta.role ==='Student')){
                  if(localStorage.getItem('status')=='Verified' && localStorage.getItem('role')=='Student')
                 
                  {
                         next();
                  }
                  else{
                          router.push({name:'Student'})
                  }
                }
                  else if((to.meta.requiresAuth) && (to.meta.role ==='College')){
                    if(localStorage.getItem('status')=='Verified' && localStorage.getItem('role')=='College')
                   
                    {
                           next();
                    }
                    else{
                            router.push({name:'College'})
                    }
        }
        else{
                next();
        }
})
export default router;