<template>
  <div :class="isSee ? '' : 'hide'" class="content-container"></div>
</template>

<script>
  import { TransitionFade } from "@morev/vue-transitions";
  export default {
    components: {
      TransitionFade,
    },
    props: {},
    data() {
      return {
        see: false,
      };
    },
    computed: {
      isSee() {
        return this.see;
      },
    },
    mounted() {
      this.emitter.on("seemore", (payload) => {
        this.see = payload;
        console.log(this.isSee);
      });
    },
  };
</script>

<style lang="scss">
  @import "content";
</style>
