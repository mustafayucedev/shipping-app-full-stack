<script setup>
    import Post from "../components/Shared/Post.vue";
    import { useStore } from "../stores/index"
    const store = useStore();

    store.getCompany();
    store.getPosts()
</script>

<template>
    <Post />
</template>