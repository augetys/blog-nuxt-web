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
  import Header from "~/components/layout/Header.vue";
  import Footer from "~/components/layout/Footer.vue";
  import Background from "~/components/layout/Background.vue";
  import SmallTool from "~/components/common/Smalltool";

  export default {
    name: "empty",
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
