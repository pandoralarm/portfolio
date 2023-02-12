<template>
  <div class="gradbg">
    <div class="inverted">
      <div class="reverted">
        <div class="title">
          FULLSTACK DEVELOPER <br />
          PORTFOLIO
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tryThis: {
        type: String,
        default: "this is the defaul val",
      },
    },
    data() {
      return {
        count: 0,
      };
    },
  };
</script>

<style lang="scss">
  @import "landing";
</style>
