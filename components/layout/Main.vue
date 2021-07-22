<template>
  <div id="app-main">
    <Header/>

    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "~/components/layout/Header.vue";
  import Footer from "~/components/layout/Footer.vue";
  import NavView from "./Nav.vue";
  import AsideView from "./Aside.vue";

  export default {
    name: "PcMain",
    components: {
      Header,
      NavView,
      AsideView,
      Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>
