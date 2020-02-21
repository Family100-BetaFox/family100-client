<template>
  <div class="sp-loader">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    message: String
  }
}
</script>

<style lang="scss" scoped>
  .sp-loader {
    position: fixed;
    z-index: 2000;
    height: 99999px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.7);
    h1 {
      position: relative;
      top: 250px;
      color: #fff;
    }
  }
</style>
