<template>
  <div class="tag-archive-page">
    <Carousel/>
    <article-list :article="article"  />
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
  import {getArticles} from "~/api/blog";
  import Carousel from "~/components/common/carousel";
  export default {
    name: "tag",
    components:{
      Carousel,
      ArticleList
    },
    created() {
      this.id = this.$route.params.id
    },
    data() {
      return {
        pageNum: 1,
        pageSize: 10,
        article: [],
        total: 0,
        id:''
      }
    },
    async asyncData ({ params }) {
      const res = await getArticles({tagId:params.id,pageSize:10,pageNum:1})
      return {article: res.data.list,total: res.data.total}
    },
    methods: {
      async getList() {
        const res = await getArticles({tagId:this.id,pageSize: this.pageSize, pageNum: this.pageNum})
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
  }
</script>

<style scoped>
  .article-pagination {
    text-align: center;
    margin-top: 10px;
  }
</style>
