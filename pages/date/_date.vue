<template>
  <div class="date-archive-page">
    <article-list :article="article"  />
  </div>
</template>

<script>
  import ArticleList from "~/components/common/List";
  export default {
    name: "date",
    components:{
      ArticleList
    }
  }
</script>

<style scoped>

</style>
