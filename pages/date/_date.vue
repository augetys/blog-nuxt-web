<template>
  <div class="date-archive-page">
    <article-list :article="article"  />
  </div>
</template>

<script>
  import ArticleList from "~/components/common/list";
  export default {
    name: "_date",
    components:{
      ArticleList
    }
  }
</script>

<style scoped>

</style>
