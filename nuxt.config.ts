// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      // viewport: "width=500, initial-scale=1",
      title: "Alan Raihan's Portfolio",
      meta: [{ name: "This is the personal portfolio of Alan Raihan Maulana", content: "Peek inside on what I'm working on and whats already done!." }],
    },
  },
  ssr: false,
  modules: [
    // ...
    "@pinia/nuxt",
  ],
});
