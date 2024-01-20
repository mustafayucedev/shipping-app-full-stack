<script setup>
    import IconLocation from "../../assets/images/icon-location.svg";
    import IconCar from "../../assets/images/icon-car.svg";
    import IconWeight from "../../assets/images/icon-weight.svg";
    import IconPhone from "../../assets/images/icon-phone.svg";
    import IconPayment from "../../assets/images/icon-payment.svg";

    import { dateFormat } from "../../plugins/moment";

    import { useStore } from "../../stores/index"
    const store = useStore();
</script>

<template>
    <div class="border border-gray rounded-md p-4" v-for="post in store.post" :key="post.id">
        <div class="text-md mb-3">  {{ store.getCompanyName(post) }} </div>
        <div class="text-sm font-semibold h-10 leading-5 overflow-hidden mb-4"> {{ post.title }} </div>
        <ul class="grid grid-cols-2 gap-3 text-sm mb-4">
            <li class="flex items-center gap-2">
                <img class="w-5 h-5" :src="IconLocation" :alt="post.fromWhere">
                <span>{{ post.fromWhere }}</span>
            </li>
            <li class="flex items-center gap-2">
                <img class="w-5 h-5" :src="IconLocation" :alt="post.toWhere">
                <span>{{ post.toWhere }}</span>
            </li>
            <li class="flex items-center gap-2">
                <img class="w-5 h-5" :src="IconCar" :alt="post.carType">
                <span>{{ post.carType }}</span>
            </li>
            <li class="flex items-center gap-2">
                <img class="w-5 h-5" :src="IconWeight" :alt="post.weight">
                <span>{{ post.weight }}</span>
            </li>
            <li class="flex items-center gap-2">
                <img class="w-5 h-5" :src="IconPhone" :alt="post.phone">
                <a :href="store.getterPhoneLink(post)"> {{ store.getCompanyPhone(post) }} </a>
            </li>
            <li class="flex items-center gap-2">
                <img class="w-5 h-5" :src="IconPayment" :alt="post.paymentMethod">
                <span>{{ post.paymentMethod }}</span>
            </li>
        </ul>
        <div class="flex flex-wrap gap-3">
            <div class="border-2 border-black rounded-full py-1 px-5 text-sm font-medium"> {{ post.price }} ₺ </div>
            <a :href="store.getterPhoneLink(post)" class="border-2 border-black bg-black rounded-full py-1 px-5 text-sm font-medium"> {{ $t(`call`) }} </a>
        </div>
        <div class="text-xs mt-4"> Oluşturma Tarihi : <strong>{{ dateFormat(post.createdDate) }}</strong> </div>
    </div>
</template>