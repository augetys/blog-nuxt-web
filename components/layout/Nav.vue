<template>
  <!--左侧导航-->
  <div id="nav" class="nav-container aside-nav">
    <nav class="nav-list">
      <nuxt-link :to="'/'" class="item link-active">
        <i class="iconfont icon-home"></i>
        <span class="text">醉花阴</span>
      </nuxt-link>
      <nuxt-link to="/" class="item">
        <i class="iconfont icon-code"></i>
        <span class="text">无妄海</span>
      </nuxt-link>
      <nuxt-link to="/" class="item">
        <i class="iconfont icon-think"></i>
        <span class="text">清平乐</span>
      </nuxt-link>
      <nuxt-link to="/" class="item">
        <i class="iconfont icon-life"></i>
        <span class="text">如梦令</span>
      </nuxt-link>
      <nuxt-link to="/" class="item">
        <i class="iconfont icon-date"></i>
        <span class="text">荏苒</span>
      </nuxt-link>
      <nuxt-link to="/" class="item">
        <i class="iconfont icon-photo"></i>
        <span class="text">琉璃镜</span>
      </nuxt-link>
      <nuxt-link to="/" class="item">
        <i class="iconfont icon-file"></i>
        <span class="text">藏经阁</span>
      </nuxt-link>
      <nuxt-link to="/" class="item">
        <i class="iconfont icon-personInfo"></i>
        <span class="text">山外小楼</span>
      </nuxt-link>
      <nuxt-link to="/" class="item guestbook">
        <i class="iconfont icon-guestbook"></i>
        <span class="text">天命风流</span>
      </nuxt-link>
      <nuxt-link to="/" class="item guestbook">
        <i class="iconfont icon-video"></i>
        <span class="text">海市蜃楼</span>
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

