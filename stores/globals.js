import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useGlobalsStore = defineStore("globals", {
  // other options...
  state: () => ({
    showContent: false,
    contentLoaded: false,
  }),
  getters: {
    isShow: (state) => state.showContent,
    isLoaded: (state) => state.contentLoaded,
  },
  actions: {
    setShow(payload) {
      this.showContent = payload;
    },
    setLoaded(payload) {
      this.contentLoaded = payload;
    },
  },
});
