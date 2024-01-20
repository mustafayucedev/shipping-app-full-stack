<script setup>
    import Navbar from "./Navbar.vue";
    import HeaderButtons from "../components/Shared/HeaderButtons.vue";
    
    import IconHamburger from "../assets/images/icon-hamburger.svg";
    import IconClose from "../assets/images/icon-close.svg";
    
    import { useStore } from "../stores/index";
    const store = useStore();
</script>

<template>
    <div class="block lg:hidden">
        <div v-if="!store.mobileMenu">
            <button @click="store.toggleMenu()" class="border-2 border-black rounded-lg">
                <img :src="IconHamburger" alt="Menüyü Göster">
            </button>
        </div>
        <div v-else>
            <button @click="store.toggleMenu()" class="border-2 border-black rounded-lg">
                <img :src="IconClose" alt="Menüyü Gizle">
            </button>
            <div class="fixed top-14 w-full h-full bg-gray z-10 right-0 p-5">
                <Navbar />
                <HeaderButtons />
            </div>
        </div>
    </div>
</template>