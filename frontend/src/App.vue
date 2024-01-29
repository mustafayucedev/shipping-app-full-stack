<script setup>
    import Header from "@/layout/Header.vue";
</script>

<template>
    <div class="container">
        <Header />
        <main>
            <router-view />
        </main>
    </div>
</template>