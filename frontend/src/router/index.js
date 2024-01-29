import { createRouter , createWebHistory } from "vue-router";
import { useStore } from "@/stores/index";

import Home from "@/views/Home/index.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/driver",
        name: "Driver",
        component: () => import('@/views/Driver/index.vue')
    },
    {
        path: "/company",
        name: "Company",
        component: () => import('@/views/Company/index.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('@/views/Auth/Login.vue')
    },
    {
        path: "/register",
        name: "Register",
        component: () => import('@/views/Auth/Register.vue')
    },
    {
        path: "/post-create",
        name: "PostCreate",
        component: () => import('@/views/PostCreate/index.vue')
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import('@/views/NotFound/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const unLoginRequired = ["PostCreate"]; // giriş yapılmadığında yönlendirme yapılmayacak sayfalar
const inLoginRequired = ["Login","Register"]; // giriş yapıldığında yönlendirme yapılmayacak sayfalar

router.beforeEach(async (to,_,next) => {
    let store = useStore();

    if(unLoginRequired.indexOf(to.name) > -1){
        if(store.getterIsLogin) {
            next()
        }
        else {
            next({name: "Login"})
        }
    }

    else if(inLoginRequired.indexOf(to.name) > -1){
        if(store.getterIsLogin) {
            next({name: "Home"})
        }
        else {
            next()
        }
    }
    
    else {
        next()
    }
});

export default router