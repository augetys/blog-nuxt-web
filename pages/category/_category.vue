<template>
  <div class="category-archive-page">
    <article-list :article="article"  />
  </div>
</template>

<script>
  import ArticleList from "~/components/common/list";
  export default {
    name: "_category",
    components:{
      ArticleList
    },
    computed: {
      article() {
        return []
      }
    }
  }
</script>

<style scoped>

</style>
