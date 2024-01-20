<script setup>
    import { ref } from 'vue';

    const navbar = ref([
        {
            name: "homePage",
            href: "/"
        },
        {
            name: "shippingCompany",
            href: "/company"
        },
        {
            name: "popularDriver",
            href: "/driver"
        },
    ])

</script>

<template>
    <nav>
        <ul class="flex lg:items-center lg:gap-7 lg:mb-0 lg:flex-row mb-6 flex-col">
            <li v-for="item in navbar" class="lg:p-0 lg:border-0 border-b-[1px] p-2">
                <router-link :to="item.href" class="text-sm font-medium" :title="item.name"> {{ $t(`${item.name}`) }} </router-link>
            </li>
        </ul>
    </nav>
</template>