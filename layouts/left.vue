<template>
  <div>
    <client-only>
      <background/>
      <small-tool/>
    </client-only>
    <Header/>
    <div id="index-page" class="container">
      <Nav></Nav>
      <Nuxt/>
    </div>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "~/components/layout/pc/Header.vue";
  import Footer from "~/components/layout/pc/Footer.vue";
  import Background from "~/components/common/Background.vue";
  import SmallTool from "~/components/common/Smalltool";
  import Nav from "~/components/layout/pc/Nav.vue";
  export default {
    name: "left",
    components: {
      Header,
      Footer,
      Background,
      SmallTool,
      Nav
    }
  }
</script>

<style scoped>

</style>
