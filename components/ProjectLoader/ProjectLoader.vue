<template>
  <div :class="[isSee ? '' : 'pop']" class="project-container">
    <div class="title">Title</div>
    <img src="@/assets/etag.png" />
  </div>
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
  @import "ProjectLoader";
</style>
