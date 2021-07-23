<template>
  <div id="app-main">
    <client-only>
      <background />
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
  export default {
    name: "PcMain",
    components: {
      Background,
      Header,
      Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>
