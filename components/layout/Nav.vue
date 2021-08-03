<template>
  <!--左侧导航-->
  <div id="nav" class="nav-container aside-nav">
    <!--    link-active-->
    <nav class="nav-list">
      <nuxt-link v-for="(item,index) in navs" :key="index" :to="`${item.path}`" class="item">
        <i :class="`${item.icon}`" class="iconfont"></i>
        <span class="text">{{item.name}}</span>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "PcNav",
    computed: {
      ...mapState({
        navs: state => state.nav.data,
      })
    }
  }
</script>

<style lang="scss" scoped>
  .nav-container {
    margin-right: 10px;
    width: 160px;
  }

  /*nav*/
  .aside-nav {
    width: $navbar-width;
    height: auto;
    margin-right: $lg-gap;
    user-select: none;

    .nav-list {
      width: $navbar-width;
      padding: 0;
      margin: 0;
      position: fixed;

      .item {
        border: none;
        display: block;
        position: relative;
        width: 100%;
        height: 3em;
        line-height: 3em;
        padding: 0 $lg-gap;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 1px;
        color: $text-secondary;
        font-family: 'webfont' !important;
        letter-spacing: 0.5px;
        margin-bottom: $sm-gap;

        &:hover {
          color: $primary;
        }

        .iconfont {
          width: 1em;
          margin-right: $gap;
          display: inline-block;
        }
      }

      .link-active {
        font-weight: bold;
        color: $primary;
        background-color: $module-bg;
      }
    }
  }
</style>

