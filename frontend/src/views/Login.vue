<script setup>
import Title from "../components/Title.vue";
import Button from "../components/Button.vue";

import { useStore } from "../stores/index";
const store = useStore();

store.getCompany()

</script>

<template>
    <section>
        <div class="text-center border border-gray p-5 rounded-md lg:w-[550px] mx-auto">
            <Title> {{ $t(`loginPageTitle`) }} </Title>
            <p class="text-sm mb-5">
                {{ $t(`loginPageSubTitle`) }}
            </p>
            <div class="mb-5">
                <input 
                type="email" 
                v-model="store.companyLogin.email"
                :placeholder="$t(`email`)"
                class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
            </div>
            <div class="mb-5">
                <input 
                type="password" 
                v-model="store.companyLogin.password" 
                :placeholder="$t(`password`)"
                class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
            </div>
            <div>
                <Button @click="store.login()"> {{ $t(`loginPageTitle`) }}  </Button>
            </div>
         </div>
    </section>
</template>