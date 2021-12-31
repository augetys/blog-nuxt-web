<template>
  <div id="app-main">
    <client-only>
      <figure class="widget">
        <background/>
        <small-tool/>
      </figure>
    </client-only>
    <Header/>
    <div id="index-page" class="container">
      <Nav></Nav>
      <div id="main" class="main-container">
        <Nuxt/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "~/components/layout/pc/Header.vue";
  import Footer from "~/components/layout/pc/Footer.vue";
  import Nav from "~/components/layout/pc/Nav.vue";
  import Aside from "~/components/layout/pc/Aside.vue";
  import Background from "~/components/common/Background.vue";
  import SmallTool from "~/components/common/Smalltool.vue";
  export default {
    name: "left",
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
  .main-container {
    width: 890px;
  }
  /*首页布局*/
  #index-page {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
