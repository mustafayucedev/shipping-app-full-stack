import { defineStore } from "pinia";
import createState from "./state";
import createActions from "./actions";
import createGetters from "./getters";

export const useStore = defineStore("indexStore", {
    state: createState,
    actions: createActions,
    getters: createGetters,
    persist: true,
});