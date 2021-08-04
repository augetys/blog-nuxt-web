<template>
  <div class="tag-archive-page">
    <article-list :article="article"  />
  </div>
</template>

<script>
  import ArticleList from "~/components/common/List";
  export default {
    name: "tag",
    components:{
      ArticleList
    }
  }
</script>

<style scoped>

</style>
