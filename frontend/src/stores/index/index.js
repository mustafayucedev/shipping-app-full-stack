import { defineStore } from "pinia";

import createState from "@/stores/index/state";
import createActions from "@/stores/index/actions";
import createGetters from "@/stores/index/getters";

export const useStore = defineStore("indexStore", {
    state: createState,
    actions: createActions,
    getters: createGetters,
    persist: true,
});