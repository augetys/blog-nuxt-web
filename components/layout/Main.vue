<template>
  <div id="app-main">
    <client-only>
      <background/>
      <small-tool />
    </client-only>
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "~/components/layout/Header.vue";
  import Footer from "~/components/layout/Footer.vue";
  import Background from "~/components/layout/Background.vue";
  import SmallTool from "../common/Smalltool";

  export default {
    name: "PcMain",
    components: {
      Background,
      Header,
      Footer,
      SmallTool
    }
  }
</script>

<style lang="scss" scoped>
  #app-main {
    padding-top: 6.236rem;
  }
</style>
