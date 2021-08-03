<template>
  <div>
    <client-only>
      <background/>
      <small-tool/>
    </client-only>
    <Header/>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from "~/components/layout/pc/Header.vue";
  import Footer from "~/components/layout/pc/Footer.vue";
  import Background from "~/components/common/Background.vue";
  import SmallTool from "~/components/common/Smalltool";

  export default {
    name: "articleDetail",
    components: {
      Header,
      Footer,
      Background,
      SmallTool
    }
  }
</script>

<style scoped>

</style>
