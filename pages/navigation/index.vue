<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-collection"></i> 常用网址</span>
        <el-row>
          <el-col :span="6" v-for="(item, index) in commonList">
            <el-link :href="`${item.url}`" target="_blank" :underline="false">{{item.name}}</el-link>
          </el-col>
          <empty-box v-if="!commonList.length">
            <slot>空空如也。。。。。。。</slot>
          </empty-box>
        </el-row>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label"><i class="el-icon-user"></i> 学习</span>
        <el-row>
          <el-col :span="6" v-for="(item, index) in studyList">
            <el-link :href="`${item.url}`" target="_blank" :underline="false">{{item.name}}</el-link>
          </el-col>
          <empty-box v-if="!studyList.length">
            <slot>空空如也。。。。。。。</slot>
          </empty-box>
        </el-row>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label"><i class="el-icon-mouse"></i> 资源</span>
        <el-row>
          <el-col :span="6" v-for="(item, index) in sourceList">
            <el-link :href="`${item.url}`" target="_blank" :underline="false">{{item.name}}</el-link>
          </el-col>
          <empty-box v-if="!sourceList.length">
            <slot>空空如也。。。。。。。</slot>
          </empty-box>
        </el-row>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label"><i class="el-icon-video-play"></i> 影视</span>
        <el-row>
          <el-col :span="6" v-for="(item, index) in videoList">
            <el-link :href="`${item.url}`" target="_blank" :underline="false">{{item.name}}</el-link>
          </el-col>
          <empty-box v-if="!videoList.length">
            <slot>空空如也。。。。。。。</slot>
          </empty-box>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {getNavigation} from "~/api/blog";

  export default {
    layout: 'center',
    name: "index",
    async asyncData({params}) {
      const res = await getNavigation({})
      console.log(res.data.commonList)
      return {
        commonList: res.data.commonList,
        studyList: res.data.studyList,
        sourceList: res.data.sourceList,
        videoList: res.data.videoList
      }
    }
  }
</script>

<style scoped>
  .el-link:hover {
    color: #ad6598;
  }

  .el-col {
    margin-bottom: 10px;
  }

  .el-tabs--border-card > .el-tabs__content {
    padding: 20px;
  }
</style>
