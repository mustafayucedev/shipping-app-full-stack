
import { createRouter , createWebHistory } from "vue-router";
import { useStore } from "../stores/index";

import Home from "../views/Home.vue";
import Driver from "../views/Driver.vue";
import Company from "../views/Company.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import PostCreate from "../views/PostCreate.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/driver",
        name: "Driver",
        component: Driver
    },
    {
        path: "/company",
        name: "Company",
        component: Company
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/post-create",
        name: "PostCreate",
        component: PostCreate
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound
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