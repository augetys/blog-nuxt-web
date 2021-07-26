<template>
  <div id="toolbox">
    <div class="container">
      <div class="tools">

        <button class="to-page-top" :title="totop" @click="toTop">
          <i class="iconfont icon-top"/>
        </button>

        <button class="to-page-bottom" :title="tobottom" @click="toBottom">
          <i class="iconfont icon-bottom"/>
        </button>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SmallTool",
    data() {
      return {
        totop:"回到顶部",
        tobottom:"去底部"
      }
    },
    methods: {
      toTop() {
        scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      toBottom() {
        scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  #toolbox {
    position: fixed;
    z-index: $z-index-toolbox;
    width: 100%;
    bottom: 20rem;

    > .container {
      $size: $lg-gap * 2.8;
      position: relative;

      > .tools {
        position: absolute;
        right: -12rem;
        width: $size;

        > .to-page-top,
        > .to-page-bottom {
          display: block;
          width: $size;
          height: $size;
          line-height: $size;
          text-align: center;

          &:hover {
            background-color: $module-hover-bg;
          }
        }

        > .to-page-bottom {
          height: $size * 0.8;
          line-height: $size * 0.8;
        }
      }
    }
  }
</style>

