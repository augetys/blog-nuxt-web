<template>
  <div>
    <div class="block">
      <el-timeline>

        <el-timeline-item v-for="(item, index) in soulList" :timestamp="item.createTime" :key="index">
          <el-card>
            <p>{{item.content}}</p>
            <p class="source">{{item.source}}</p>
          </el-card>
        </el-timeline-item>

      </el-timeline>

      <empty-box v-if="!soulList.length">
        <slot>空空如也。。。。。。。</slot>
      </empty-box>

    </div>
  </div>
</template>

<script>
  import {getSoul} from "~/api/blog";

  export default {
    layout: 'left',
    name: "index",
    async asyncData({params}) {
      const res = await getSoul({})
      return {soulList: res.data}
    }
  }
</script>

<style scoped>

  /deep/ .el-timeline-item__tail {
    border-left: 2px solid #ad6598;
  }

  /deep/ .el-timeline-item__node {
    background-color: #ad6598;
  }

  .el-card {
    background-color: rgba(255, 255, 255, 0.6);
  }

  .source {
    float: right;
    display: block;
    margin: 10px 10px 10px 0;
  }
</style>
