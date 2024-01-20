<script setup>
    import Title from '../components/Title.vue';
    import CompanyItem from '../components/Shared/CompanyItem.vue';

    import { ref } from 'vue';

    const popularCompany = ref([
        {
            id: 1,
            name: "Örnek Firma #1",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloribus voluptatem, harum doloremque ex similique id molestias deleniti nisi placeat. Eaque, obcaecati illum. Ipsum, omnis itaque suscipit sunt quaerat sequi!",
            city: "İstanbul",
            phone: "05555555555",
        },
        {
            id: 2,
            name: "Örnek Firma #2",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloribus voluptatem, harum doloremque ex similique id molestias deleniti nisi placeat. Eaque, obcaecati illum. Ipsum, omnis itaque suscipit sunt quaerat sequi!",
            city: "Ankara",
            phone: "05444444444",
        },
        {
            id: 3,
            name: "Örnek Firma #3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloribus voluptatem, harum doloremque ex similique id molestias deleniti nisi placeat. Eaque, obcaecati illum. Ipsum, omnis itaque suscipit sunt quaerat sequi!",
            city: "İstanbul",
            phone: "05333333333",
        },
        {
            id: 4,
            name: "Örnek Firma #4",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloribus voluptatem, harum doloremque ex similique id molestias deleniti nisi placeat. Eaque, obcaecati illum. Ipsum, omnis itaque suscipit sunt quaerat sequi!",
            city: "İstanbul",
            phone: "05222222222",
        },
        {
            id: 5,
            name: "Örnek Firma #5",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloribus voluptatem, harum doloremque ex similique id molestias deleniti nisi placeat. Eaque, obcaecati illum. Ipsum, omnis itaque suscipit sunt quaerat sequi!",
            city: "İstanbul",
            phone: "05111111111",
        },
    ])
</script>

<template>
    <Title class="text-center lg:mb-10 mb-5">Popüler Nakliye Firmaları</Title>
    <section class="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-7 gap-3">
        <CompanyItem
            v-for="item in popularCompany" 
            :key="item.id"
            :name="item.name"
            :description="item.description"
            :city="item.city"
            :phone="item.phone"
        />
    </section>
</template>