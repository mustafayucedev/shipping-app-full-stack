<script setup>
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";

import { useStore } from "@/stores/index";
const store = useStore();
</script>

<template>
    <section>
        <div class="text-center border border-gray p-5 rounded-md lg:w-[1000px] mx-auto">
            <Title> {{ $t(`registerPageTitle`) }} </Title>
            <p class="text-sm mb-5">
                {{ $t(`registerPageSubTitle`) }}
            </p>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
                <div>
                    <input type="text" :placeholder="$t(`companyName`)" v-model="store.companyRegister.name" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <input type="email" :placeholder="$t(`email`)" v-model="store.companyRegister.email" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <input type="password" :placeholder="$t(`password`)" v-model="store.companyRegister.password" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <input type="text" :placeholder="$t(`phone`)" v-model="store.companyRegister.phone" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <input type="text" :placeholder="$t(`since`)" v-model="store.companyRegister.since" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <input type="text" :placeholder="$t(`facebook`)" v-model="store.companyRegister.facebook" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <input type="text" :placeholder="$t(`instagram`)" v-model="store.companyRegister.instagram" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <input type="text" :placeholder="$t(`twitter`)" v-model="store.companyRegister.twitter" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <input type="text" :placeholder="$t(`linkedin`)" v-model="store.companyRegister.linkedin" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <input type="text" :placeholder="$t(`youtube`)" v-model="store.companyRegister.youtube" class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
            </div>
            <div>
                <Button @click="store.createRegister()">+ {{ $t(`registerPageTitle`) }} </Button>
            </div>
         </div>
    </section>
</template>