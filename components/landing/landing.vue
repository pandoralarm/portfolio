<template>
  <div class="gradbg">
    <div class="inverted">
      <div class="reverted">
        <div class="title">
          <div class="subverse">FULLSTACK DEVELOPER PORTFOLIO</div>
          <br />
          <div class="verse">
            <div v-for="(verse, index) in verses" :key="index">
              <transition-fade>
                <div v-if="verse.cap.showOn.includes(isShow)" class="wide">
                  <span style="color: #ffd700; filter: invert(100%)">{{ verse.cap.quote }}</span>
                  <span :class="!verse.sub.showOn.includes(isShow) ? 'hide' : ''">{{ verse.sub.quote }}</span>
                </div>
              </transition-fade>
            </div>
          </div>
          <div @click="seemore()" class="more">
            <div class="chevron">^</div>
            <div>See More</div>
          </div>
        </div>
      </div>
    </div>
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
          console.log(this.isShow);
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
  @import "landing";
</style>
