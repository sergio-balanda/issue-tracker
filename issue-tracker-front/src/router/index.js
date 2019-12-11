import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/auth/Register.vue'
import Dashboard from '../views/pages/Dashboard.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'

import Middlewares from '../middlewares/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue'),
    meta: {
      middleware: [Middlewares.guest]
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      middleware: [Middlewares.guest]
    }
  },  
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
    meta: {
      middleware: [Middlewares.guest]
    }
  },  
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword,
    meta: {
      middleware: [Middlewares.guest]
    }
  },  
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      middleware: [Middlewares.auth]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

function nextCheck(context, middleware, index){
  const nextMiddleware = middleware[index];
  if(!nextMiddleware) return context.next;

  return (...parameters)=>{
    context.next(...parameters);
    const nextMidd = nextCheck(context,middleware,index+1);
    nextMiddleware({...context,next: nextMidd});
    
  }
}

router.beforeEach((to, from, next) => {
  if(to.meta.middleware){
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware:[to.meta.middleware];

    const ctx = {
      from,
      next,
      router,
      to
    }

    const nextMiddleware = nextCheck(ctx, next, 1);
    return middleware[0]({...ctx, next: nextMiddleware});
  }
  return next();
});

export default router
