<template>
  <div class="tag-archive-page">
    <Carousel/>
    <article-list :article="article"  />
  </div>
</template>

<script>
  import ArticleList from "~/components/common/List";
  import {getArticles} from "~/api/blog";
  import Carousel from "~/components/common/carousel";
  export default {
    name: "tag",
    components:{
      Carousel,
      ArticleList
    },
    async asyncData ({ params }) {
      const res = await getArticles({tagId:params.id,pageSize:10,pageNum:1})
      return {article: res.data.list}
    }
  }
</script>

<style scoped>

</style>
