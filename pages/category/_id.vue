<template>
  <div class="category-archive-page">
    <Carousel/>
    <article-list :article="article"  />
  </div>
</template>

<script>
  import ArticleList from "~/components/common/List";
  import {getArticles} from "~/api/blog";
  import Carousel from "~/components/common/carousel";
  export default {
    name: "category",
    components:{
      Carousel,
      ArticleList
    },
    async asyncData ({ params }) {
      const res = await getArticles({categoryId:params.id,pageSize:10,pageNum:1})
      return {article: res.data.list}
    }
  }
</script>

<style lang="scss" scoped>
  .header-box {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 16.4rem;
    background-size: cover;
    background-blend-mode: hue;
    background-color: $module-hover-bg-darken-10;
    background-position: center center;
    color: $text-reversal;
    margin-bottom: 1.236rem;

    > .logo-box {
      height: 12rem;
      overflow: hidden;

      > .logo {
        margin: 0;
        line-height: 12rem;
        text-align: center;

        @keyframes logo-animate {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .iconfont {
          font-size: 6em;
          display: inline-block;
          animation: logo-animate 5s infinite;
        }
      }
    }

    > .title-box {
      height: 4rem;
      line-height: 2.5rem;

      > .title {
        margin: 0;
        text-align: center;
        text-transform: capitalize;
      }
    }
  }
</style>
