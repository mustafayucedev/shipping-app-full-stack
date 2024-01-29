<script setup>
import Logo from "@/components/Shared/Logo.vue";
import Navbar from "@/layout/Navbar.vue";
import HeaderButtons from "@/components/Shared/HeaderButtons.vue";
import MobileNavbar from "@/layout/MobileNavbar.vue";
</script>

<template>
    <header class="lg:py-7 lg:mb-10 py-4">
        <div class="flex items-center justify-between flex-wrap">
            <div>
                <Logo />
            </div>
            <div class="flex items-center lg:gap-10 gap-2">
                <div class="hidden lg:block">
                    <Navbar />
                </div>
                <div class="hidden lg:block">
                    <HeaderButtons />
                </div>
                <MobileNavbar />
            </div>
        </div>
    </header>
</template>