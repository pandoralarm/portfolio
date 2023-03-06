<template>
  <div class="content-container" :class="[!isSee ? '' : 'hide']" @click="this.globals.setShow(!this.globals.isShow)">
    <div class="profile" :class="[!isSee ? '' : 'pop']"><img class="pict" src="@/assets/ports/alan.jpg" /></div>
    <div class="inner-container" :class="[!isSee ? '' : 'pop']">
      <ProjectLoader class="profile" />
      <ProjectLoader />
      <ProjectLoader />
      <ProjectLoader />
      <ProjectLoader />
      <ProjectLoader />
      <ProjectLoader />
    </div>
  </div>
</template>

<script>
  import { useGlobalsStore } from "@/stores/globals";
  import { TransitionFade } from "@morev/vue-transitions";
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
    props: {},
    data() {
      return {
        see: false,
      };
    },
    computed: {
      isSee() {
        return this.globals.isShow;
      },
    },
    methods: {
      more() {
        console.log(this.globals.isShow);
      },
    },
    mounted() {
      // console.log(this.globals.isShow);
    },
  };
</script>

<style lang="scss">
  @import "content";
</style>
