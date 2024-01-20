<script setup>
    import Title from '../components/Title.vue';
    import DriverItem from '../components/Shared/DriverItem.vue';

    import { ref } from 'vue';

    const popularDriver = ref([
        {
            id: 1,
            name: "Ad Soyad #1",
            city: "İstanbul",
            service: "Şehirler Arası",
            phone: "05555555555",
        },
        {
            id: 2,
            name: "Ad Soyad #2",
            city: "Ankara",
            service: "Şehir İçi",
            phone: "05444444444",
        },
        {
            id: 3,
            name: "Ad Soyad #3",
            city: "İstanbul",
            service: "Evden Eve Taşımacılık",
            phone: "05333333333",
        },
        {
            id: 4,
            name: "Ad Soyad #4",
            city: "İstanbul",
            service: "Tüm Hizmetler",
            phone: "05222222222",
        },
        {
            id: 5,
            name: "Ad Soyad #5",
            city: "İstanbul",
            service: "Şehirler Arası",
            phone: "05111111111",
        },
    ])
</script>

<template>
    <Title class="text-center lg:mb-10 mb-5">Popüler Şöförler</Title>
    <section class="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-7 gap-3">
        <DriverItem
            v-for="item in popularDriver" 
            :key="item.id"
            :name="item.name"
            :city="item.city"
            :service="item.service"
            :phone="item.phone"
        />
    </section>
</template>