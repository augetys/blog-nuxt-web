<template>
  <el-carousel indicator-position="outside" height="15em">
    <el-carousel-item v-for="item in loop" :key="item">
      <nuxt-link v-if="!item.isLink" :to="item.targetUrl" class="link">
        <img :src="item.imageUrl" :alt="item.title"/>
        <span class="title">{{ item.title }}</span>
      </nuxt-link>

      <div v-else class="link" @click="openUrl(item.targetUrl)">
        <img :src="item.imageUrl" :alt="item.title"/>
        <span class="title">{{ item.title }}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "Carousel",
    data() {
      return {};
    },
    computed: {
      ...mapState({
        loop: state => state.loop.data,
      })
    },
    methods: {
      openUrl(href) {
        window.open(href, '_blank');
      }
    }
  }
</script>


<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .title {
    position: absolute;
    margin: 0;
    top: 1.5rem;
    right: 2rem;
    color: $link-color;
    padding-right: 0.6em;
    padding-left: 1em;
    height: 2em;
    line-height: 2em;
    font-size: 1em;
    font-weight: bold;
    border-radius: 1px;
    letter-spacing: 0.3px;
    max-width: 75%;
    // -webkit-background-clip: text;
    background: linear-gradient(
        90deg,
        transparent 0%,
        $module-bg 2em,
        $module-bg-opacity-9,
        $text-reversal
    );
    transition: background-color $transition-time-fast,
    padding $transition-time-fast, color $transition-time-fast;


    &:hover {
      color: $text-darken;
      padding-left: 0.6em;
      background-color: $module-bg;
    }
  }
</style>
