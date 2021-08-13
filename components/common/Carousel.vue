<template>
  <div class="carrousel">
    <div key="swiper" v-swiper="swiperOption" class="swiper index">
      <div class="swiper-wrapper">
        <div v-for="item in loop" :key="item.id" class="swiper-slide">
          <div class="content">
            <template>
              <nuxt-link v-if="!item.isLink" :to="item.targetUrl" class="link">
                <img :src="item.imageUrl" :alt="item.title"/>
                <span class="title">{{ item.title }}</span>
              </nuxt-link>

              <div v-else class="link" @click="openUrl(item.targetUrl)">
                <img :src="item.imageUrl" :alt="item.title" />
                <span class="title">{{ item.title }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "Carousel",
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
          pagination: {
            clickable: true,
            el: ".swiper-pagination"
          },
          setWrapperSize: true,
          mousewheel: true,
          observeParents: true,
          // 禁用 PC 拖动手指样式
          grabCursor: false,
          // 禁用 PC 拖动
          simulateTouch: false,
          preloadImages: false,
          lazy: true
        }
      };
    },
    computed: {
      ...mapState({
        loop: state => state.loop.data,
      })
    },
    methods:{
      openUrl(href){
        window.open(href, '_blank');
      }
    }
  }
</script>

<style lang="scss">
  .index.swiper {
    .swiper-pagination {
      .swiper-pagination-bullet {
        &.swiper-pagination-bullet-active {
          width: 2rem;
          border-radius: 10px;
        }
      }
    }
  }
</style>

<style lang="scss" scoped>
  $pc-carrousel-height: 15em;

  .carrousel {
    height: $pc-carrousel-height;
    margin-bottom: $lg-gap;
    position: relative;
    overflow: hidden;
    user-select: none;

    > .swiper {


      .swiper-slide {
        .content {
          width: 100%;
          height: $pc-carrousel-height;
          position: relative;
          overflow: hidden;

          > .link {
            display: block;
            width: 100%;
            height: 100%;
          }

          img {
            width: 100%;
            transform: scale(1);
            transition: transform $transition-time-slow;
            cursor:pointer;
            &:hover {
              transform: scale(1.06);
            }
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
        }
      }
    }
  }
</style>
