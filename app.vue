<template>
  <Landing try-this="renderme" />
  <Content />
</template>
<script>
  import mitt from "mitt";
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
