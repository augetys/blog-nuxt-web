<template>
  <div id="background">
    <client-only>
      <div class="background-image"></div>
      <vue-canvas-nest :config="{color:'244,62,6',count: 99,opacity:0.7}"></vue-canvas-nest>
    </client-only>
  </div>
</template>

<script>
  export default {
    name: "Background"
  };
</script>

<style lang="scss" scoped>

  #background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: $z-index-underground;
    background-color: #eee;

    .background-image {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.3;
      background: url("https://photo.choot.top/background.jpg");
    }
  }

</style>
