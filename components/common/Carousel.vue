<template>
  <!--轮播图-->
  <div class="block">
    <el-carousel :interval="4000" arrow="always" trigger="click" height="200px">
      <el-carousel-item v-for="(item ,index) in loop" :key="index">
        <img ref="imgHeight" :src="item.imageUrl" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import {getLoop} from "~/api/blog";
  export default {
    name: "Carousel",
    data(){
      return{
        loop: []
      }
    },
    created() {
      getLoop({pageSize: 10, pageNum: 1}).then(response => {
        console.log("轮播图", response);
        this.loop = response.data;
      });
    }
  }
</script>

<style scoped>
  /*轮播图*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
