<template>
  <el-row :gutter="20">

    <el-col :span="8" v-for="(item, index) in photoList" :key="index">
      <el-card>
        <el-image :src="`${item.url}`" lazy></el-image>
        <p class="photo-tip">{{item.tip}}</p>
      </el-card>
    </el-col>

    <empty-box v-if="!photoList.length">
      <slot>空空如也。。。。。。。</slot>
    </empty-box>

  </el-row>
</template>

<script>
  import {getPhoto} from "~/api/blog";
  export default {
    layout: "center",
    name: "index",
    async asyncData({params}) {
      const res = await getPhoto({})
      return {photoList: res.data}
    }
  }
</script>

<style scoped>
  .el-card {
    width: 340px;
    height: 418px;
    margin-bottom: 20px;
  }

  .el-image {
    width: 100%;
    height: 360px;
    vertical-align: text-top;cursor:pointer;
  }

  .photo-tip{
    font-size: 16px;
    text-align: center;
    padding: 5px 0;
  }
</style>
