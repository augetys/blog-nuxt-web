<template>
  <div class="keyword-archive-page">
    <Carousel/>
    <div class="search-box">
      <span>为您找到" {{keyword}} "相关结果约{{total}}个</span>
    </div>
    <article-list :article="article"/>
    <el-pagination
      layout="total, sizes,prev, pager, next,jumper"
      :current-page.sync="pageNum"
      :page-size="pageSize"
      :page-sizes="[10,20,50]"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="article-pagination"
    />
  </div>
</template>

<script>
  import ArticleList from "~/components/common/List";
  import {search} from "~/api/blog";
  import Carousel from "~/components/common/carousel";

  export default {
    name: "keyword",
    components: {
      Carousel,
      ArticleList
    },
    head() {
      return {
        title: `${this.keyword} | Search`
      }
    },
    data() {
      return {
        pageNum: 0,
        pageSize: 10,
        article: [],
        total: 0,
        id: '',
        keyword: ''
      }
    },
    async asyncData({params}) {
      const res = await search({keyword: params.keyword, pageSize: 10, pageNum: 0})
      return {article: res.data.list, total: res.data.total}
    },
    methods: {
      async getList() {
        const res = await search({keyword: this.keyword, pageSize: this.pageSize, pageNum: this.pageNum})
        this.article = res.data.list
        this.total = res.data.total
      },
      handleSizeChange(val) {
        this.pageNum = 0
        this.pageSize = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.pageNum = val-1
        this.getList()
      }
    },
    created() {
      this.keyword = this.$route.params.keyword
    },
  }
</script>

<style scoped>
  .article-pagination {
    text-align: center;
    margin-top: 10px;
  }
  .search-box {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 2em;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #ad6598;
    font-size: 16px;
  }
</style>
