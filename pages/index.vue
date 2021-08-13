<template>
  <div>
    <Carousel/>
    <article-list :article="articles"/>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import Carousel from "~/components/common/carousel";
  import ArticleList from "~/components/common/List";

  export default {
    components: {
      Carousel,
      ArticleList
    },
    computed: {
      ...mapState({
        articles: state => state.articles.data.list,
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
