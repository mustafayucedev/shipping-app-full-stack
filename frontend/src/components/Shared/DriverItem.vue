<script setup>
    import { defineProps } from 'vue';
    
    const { phone } = defineProps(['name', 'city', 'service', 'phone']);
    const phoneFormat = `tel:${phone}`
</script>

<template>
    <div class="border border-gray p-5 rounded-md">
        <div class="lg:text-md text-sm font-medium lg:mb-4 mb-2"> {{ name }} </div>
        <p class="text-sm mb-1"> Hizmet : <strong>{{ service }}</strong> </p>
        <div class="text-sm mb-1">Bulunduğu Şehir : <strong> {{ city }} </strong></div>
        <div class="text-sm">Telefon No : <strong> <a :href="phoneFormat"> {{ phone }} </a> </strong> </div>
    </div>
</template>