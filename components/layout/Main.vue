<template>
  <div id="app-main">
    <client-only>
      <background/>
      <small-tool/>
    </client-only>
    <Header/>
    <div id="index-page" class="container">
      <Nav></Nav>
      <Nuxt/>
      <Aside></Aside>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "~/components/layout/Header.vue";
  import Footer from "~/components/layout/Footer.vue";
  import Nav from "~/components/layout/Nav.vue";
  import Aside from "~/components/layout/Aside.vue";
  import Background from "~/components/layout/Background.vue";
  import SmallTool from "../common/Smalltool";

  export default {
    name: "PcMain",
    components: {
      Background,
      Header,
      Footer,
      SmallTool,
      Nav,
      Aside
    }
  }
</script>

<style lang="scss" scoped>
  #app-main {
    padding-top: 6.236rem;
  }

  /*首页布局*/
  #index-page {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
