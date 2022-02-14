<template>
  <div>
    <el-tabs type="border-card" tab-position="left">

      <el-tab-pane v-for="(item,index) in list" :key="index">

        <span slot="label">{{ item.navName }}</span>
        <el-row>
          <el-col :span="6" v-for="(item, index) in item.websiteList" :key="index">
            <el-card class="box-card">
              <el-link :href="`${item.url}`" target="_blank" :underline="false">{{ item.name }}</el-link>
            </el-card>
          </el-col>
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
      console.log(res.data)
      return {
        list: res.data
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
