<template>
    <article-list :article="articles"  />
</template>

<script>
  import { mapState } from "vuex";

  import ArticleList from "~/components/common/List";
  export default {
    components:{
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
