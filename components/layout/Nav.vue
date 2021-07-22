<template>
  <div id="nav" class="aside-nav">
    <nav class="nav-list">
      <nuxt-link :to="'/'" class="item" exact>
        <i class="iconfont icon-home"></i>
        <span class="text" v-text="1111"></span>
      </nuxt-link>
      <nuxt-link to="/category/code" class="item">
        <i class="iconfont icon-code1"></i>
        <span class="text" v-text="2222"></span>
      </nuxt-link>
      <nuxt-link to="/category/think" class="item">
        <i class="iconfont icon-think"></i>
        <span class="text" v-text="3333"></span>
      </nuxt-link>
      <nuxt-link to="/category/life" class="item">
        <i class="iconfont icon-life"></i>
        <span class="text" v-text="4444"></span>
      </nuxt-link>
      <nuxt-link to="/timeline" class="item">
        <i class="iconfont icon-date"></i>
        <span class="text" v-text="5555"></span>
      </nuxt-link>
      <nuxt-link to="/photo" class="item">
        <i class="iconfont icon-photo"></i>
        <span class="text" v-text="6666"></span>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "PcNav"
  }
</script>

<style lang="scss" scoped>

</style>
