<template>
  <div class="category-archive-page">
    <article-list :article="article"  />
  </div>
</template>

<script>
  import ArticleList from "~/components/common/List";
  import {getArticlesByCategory} from "~/api/blog";
  export default {
    name: "category",
    components:{
      ArticleList
    },
    async asyncData ({ params }) {
      const res = await getArticlesByCategory({categoryId:params.id,pageSize:10,pageNum:1})
      return {article: res.data.list}
    }
  }
</script>

<style scoped>

</style>
