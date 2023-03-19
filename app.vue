<template>
  <Landing try-this="renderme" />
  <Content v-if="isLoaded" />
</template>
<script>
  import { TransitionFade } from "@morev/vue-transitions";
  import { useGlobalsStore } from "@/stores/globals";
  export default {
    setup() {
      const globals = useGlobalsStore();

      return {
        // you can return the whole store instance to use it in the template
        globals,
      };
    },
    components: {
      TransitionFade,
    },
    props: {
      tryThis: {
        type: String,
        default: "this is the defaul val",
      },
    },
    data() {
      return {
        show: 0,
        verses: [
          {
            cap: {
              quote: "craft",
              showOn: [1, 2],
            },
            sub: {
              quote: " solutions from code",
              showOn: [2],
            },
          },
          {
            cap: {
              quote: "transform",
              showOn: [4, 5],
            },
            sub: {
              quote: " vision into reality",
              showOn: [5],
            },
          },
          {
            cap: {
              quote: "enhance",
              showOn: [7, 8],
            },
            sub: {
              quote: " businesses digitally",
              showOn: [8],
            },
          },
        ],
      };
    },
    computed: {
      isShow() {
        return this.show;
      },
      isSee() {
        return this.globals.isShow;
      },
      isLoaded() {
        return this.globals.isLoaded;
      },
    },
    methods: {
      seemore(e) {
        this.globals.setShow(!this.globals.isShow);
      },
    },
    mounted() {
      setTimeout(() => {
        this.show = 1;
        setInterval(() => {
          // console.log(this.isShow);
          if (this.isShow > 0) {
            this.show++;
          }

          if (this.isShow > 9) {
            this.show = 1;
          }
        }, 1500);
      }, 1500);
    },
  };
</script>

<style lang="scss">
  @import "@fontsource/bebas-neue";
  html,
  body {
    margin: 0;
    padding: 0;

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
      scrollbar-width: none;
      scrollbar-color: #000000 #ffffff;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 0px;
    }

    *::-webkit-scrollbar-track {
      background: #ffffff;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #000000;
      border-radius: 50px;
      border: 1px solid #ffffff;
    }
  }
</style>
