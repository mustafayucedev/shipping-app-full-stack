<script setup>
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";

import { useStore } from "@/stores/index"
const store = useStore();

store.getCity();
store.companyIdRelation();
</script>

<template>
    <section>
        <div class="text-center border border-gray p-5 rounded-md lg:w-[1000px] mx-auto">
            <Title>İlan Oluştur</Title>
            <p class="text-sm mb-5">
                İlan bilgilerinizi eksiksiz ve detaylı oluşturun, daha kolay şöför bulun!
            </p>
            <div class="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                    <input
                    id="title"
                    type="type"
                    v-model="store.postCreate.title"
                    placeholder="İlan Açıklama"
                    class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
                <div>
                    <select 
                        id="car-type"
                        v-model="store.postCreate.carType"
                        class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                        <option disabled selected value="null">Kasa Tipi Seçin</option>
                        <option value="Tente">Tente</option>
                        <option value="Branda">Branda</option>
                        <option value="Panelvan">Panelvan</option>
                        <option value="Kamyonet (Pick-up)">Kamyonet (Pick-up)</option>
                        <option value="Kamyon (Flatbed)">Kamyon (Flatbed)</option>
                        <option value="Diğer">Diğer</option>
                    </select>
                </div>
                <div>
                    <select 
                        id="from-where" 
                        v-model="store.postCreate.fromWhere"
                        class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                        <option disabled selected value="null">Nereden ?</option>
                        <option v-for="city in store.city" :key="city.id" :value="city.name">{{ city.name }}</option>
                    </select>
                </div>
                <div>
                    <select 
                        id="to-where"
                        v-model="store.postCreate.toWhere"
                        class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                        <option disabled selected value="null">Nereye ?</option>
                        <option v-for="city in store.city" :key="city.id" :value="city.name">{{ city.name }}</option>
                    </select>
                </div>
                <div>
                    <select 
                        id="from-where" 
                        v-model="store.postCreate.weight"
                        class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                        <option disabled selected value="null">Ağırlık Seçin</option>
                        <option value="0-999 Kg">0-999 Kg</option>
                        <option value="1-2 Ton">1-2 Ton</option>
                        <option value="2-3 Ton">2-3 Ton</option>
                        <option value="3-4 Ton">3-4 Ton</option>
                        <option value="4-5 Ton">4-5 Ton</option>
                        <option value="5-6 Ton">5-6 Ton</option>
                        <option value="7-8 Ton">7-8 Ton</option>
                        <option value="8-9 Ton">8-9 Ton</option>
                        <option value="9-10 Ton">9-10 Ton</option>
                        <option value="10 Ton üzeri">10 Ton üzeri</option>
                    </select>
                </div>
                <div>
                    <select 
                        id="payment-method"
                        v-model="store.postCreate.paymentMethod"
                        class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                        <option disabled selected value="null">Ödeme Türü</option>
                        <option value="Teslimatta Nakit">Teslimatta Nakit</option>
                        <option value="Teslimatta Kredi Kartı">Teslimatta Kredi Kartı</option>
                        <option value="Ön Ödemeli Nakit">Ön Ödemeli Nakit</option>
                        <option value="Diğer">Diğer</option>
                    </select>
                </div>
                <div>
                    <input
                    id="price"
                    type="number" 
                    v-model="store.postCreate.price"
                    placeholder="Fiyat"
                    class="border border-gray rounded-md py-2 px-3 w-full outline-none text-sm text-form focus:bg-gray">
                </div>
            </div>
            <div>
                <Button @click="store.createPost">+ İlan Oluştur</Button>
            </div>
         </div>
    </section>
</template>