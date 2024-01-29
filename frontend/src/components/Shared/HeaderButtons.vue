<script setup>
import { ref } from "vue";
import { launguage } from "@/plugins/i18n";
import router from '@/router';
import { useStore } from "@/stores/index";
const store = useStore();

const unLogin = ref([
    {
        name: "login",
        href: "/login",
    },
    {
        name: "register",
        href: "/register",
    },
]);

const login = ref([
    {
        name: "postTitle",
        href: "/post-create",
    },
]);

const logout = () => {
    store.$state.isLogin = false
    router.push('/login')
}

const changeLanguage = () => {
    let current = launguage.global.locale
    if (current === 'tr') {
        launguage.global.locale = 'en'
    }
    else {
        launguage.global.locale = 'tr'
    }
}
</script>

<template>
    <div class="flex lg:gap-5 gap-3 items-center">
        <router-link 
            v-for="item in unLogin" 
            v-if="!store.getterIsLogin" 
            :key="item"
            class="border-2 border-black rounded-full py-1 lg:px-5 px-2 lg:text-sm text-xs font-medium" 
            :to="item.href">
            {{ $t(`${item.name}`) }}
        </router-link>
        <router-link 
            v-for="item in login" 
            v-if="store.getterIsLogin"
            :key="item"
            class="border-2 border-black rounded-full py-1 lg:px-5 px-2 lg:text-sm text-xs font-medium" 
            :to="item.href">
            {{ $t(`${item.name}`) }}
        </router-link>
        <button 
            v-if="store.getterIsLogin"
            class="border-2 border-black rounded-full py-1 lg:px-5 px-2 lg:text-sm text-xs font-medium" 
            @click="logout">
            {{ $t(`logout`) }} 
        </button>
        <button 
            class="border-2 border-black rounded-full py-1 lg:px-5 px-2 lg:text-sm text-xs font-medium" 
            @click="changeLanguage()">  
            {{ $t(`language`) }} 
        </button>
    </div>
</template>