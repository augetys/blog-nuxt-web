<template>
  <div>
    <Carousel/>
    <article-list :article="article"/>
    <el-pagination
      layout="total, sizes,prev, pager, next,jumper"
      :current-page.sync="pageNum"
      :page-size="pageSize"
      :page-sizes="[1,5,10]"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="article-pagination"
    />
  </div>
</template>

<script>
  import Carousel from "~/components/common/carousel";
  import ArticleList from "~/components/common/List";
  import {getArticles} from "~/api/blog";

  export default {
    components: {
      Carousel,
      ArticleList
    },
    async asyncData() {
      const res = await getArticles({pageSize: 10, pageNum: 1})
      return {article: res.data.list, total: res.data.total}
    },
    data() {
      return {
        pageNum: 1,
        pageSize: 10,
        article: [],
        total: 0
      }
    },
    methods: {
      async getList() {
        const res = await getArticles({pageSize: this.pageSize, pageNum: this.pageNum})
        this.article = res.data.list
        this.total = res.data.total
      },
      handleSizeChange(val) {
        this.pageNum = 1
        this.pageSize = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.pageNum = val
        this.getList()
      }
    }
    // computed: {
    //   ...mapState({
    //     articles: state => state.articles.data.list,
    //   })
    // }
  }
</script>

<style lang="scss" scoped>
  .article-pagination {
    text-align: center;
    margin-top: 10px;
  }
</style>
