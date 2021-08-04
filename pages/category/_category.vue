<template>
  <div class="category-archive-page">
    <article-list :article="article"  />
  </div>
</template>

<script>
  import ArticleList from "~/components/common/List";
  import { mapState } from "vuex";
  export default {
    name: "category",
    components:{
      ArticleList
    },
    fetch({ store, params }) {
      return store.dispatch("fetchList", params);
    },
    computed: {
      ...mapState({
        article: state => state.categoryData.list
      })
    }
  }
</script>

<style scoped>

</style>
