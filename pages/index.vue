<template>
  <!--中间文章内容-->
  <div id="main" class="main-container">
    <Carousel />

    <div style="margin-top: 20px">
      <!--文章列表-->
      <div class="article-list-item" v-for="(item,index) in articles" :key="item.id">
        <div class="item-content">
          <!-- 封面图-->
          <div class="item-thumb">
            <span class="item-oirigin self">原创</span>
            <img class="item-thumb-img" :src="item.cover"/>
          </div>
          <!-- 标题和简介-->
          <div class="item-body">
            <h5 class="item-title">
              <nuxt-link :to="`/article/${item.id}`" v-text="item.title"/>
            </h5>
            <p class="item-description" style="-webkit-box-orient: vertical;">{{item.summary}}</p>
            <div class="item-meta">
              <span class="date">
                <i class="iconfont icon-clock"></i>
                <span>{{item.createTime}}</span>
              </span>
              <span class="views">
                <i class="iconfont icon-view"></i>
                <span>{{item.clickCount}}</span>
              </span>
              <span class="comments">
                <i class="iconfont icon-comment"></i>
                <span>1</span>
              </span>
              <span class="likes">
                <i class="iconfont icon-like"></i>
                <span>0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getArticles} from "~/api/blog";
  import Carousel from "../components/common/Carousel";
  export default {
    components:{
      Carousel
    },
    data() {
      return {
        articles: []
      }
    },
    created() {
      getArticles({pageSize: 10, pageNum: 1}).then(response => {
        console.log("文章", response);
        this.articles = response.data.list;
      });
    }
  }
</script>

<style lang="scss" scoped>

  .main-container {
    width: 596px;
  }

  /*main*/
  .article-list-item {
    margin-bottom: $lg-gap;
    background-color: hsla(0, 0%, 100%, 0.6);
    transition: background-color .1s;

    &:hover {
      background-color: $module-hover-bg;
    }

    &:last-child {
      margin: 0;
    }

    > .item-content {
      $height: $gap * 11;
      $padding: $sm-gap;
      $content-height: $height - ($padding * 2);
      display: block;
      overflow: hidden;
      height: $height;
      padding: $padding;

      &:hover {
        .item-thumb {
          .item-oirigin {
            opacity: 1;
          }

          .item-thumb-img {
            opacity: 0.95;
            transform: translateX(-3px);
          }
        }
      }

      > .item-thumb {
        float: left;
        width: 12em;
        height: $content-height;
        overflow: hidden;
        position: relative;

        .item-oirigin {
          position: absolute;
          left: 0;
          top: 0;
          height: 2.1rem;
          line-height: 2.1rem;
          z-index: $z-index-normal + 1;
          padding: 0 $sm-gap;
          border-bottom-right-radius: 1px;
          opacity: 0.4;
          font-size: $font-size-small;
          color: #fff;
          text-align: center;
          text-transform: uppercase;

          &.self {
            background-color: rgba($accent, 0.5);
          }

          &.other {
            background-color: rgba($red, 0.5);
          }

          &.hybrid {
            background-color: rgba($primary, 0.5);
          }
        }

        .item-thumb-img {
          min-width: 100%;
          width: calc(100% + 3px);
          max-width: calc(100% + 3px);
          height: auto;
          min-height: $content-height;
          border-color: transparent;
          background-color: $module-hover-bg;
          opacity: 1;
          transform: translateX(0);
          transition: transform $transition-time-fast,
          opacity $transition-time-fast;
        }
      }

      > .item-body {
        float: right;
        width: 28.5em;
        height: $content-height;

        > .item-title {
          margin-top: 3px;
          margin-bottom: $sm-gap;
          font-weight: bold;
          color: $link-hover-color;

          > a {
            margin-left: 0;
            transition: margin $transition-time-normal;

            &:hover {
              display: inline-block;
              text-decoration: underline;
              margin-left: $sm-gap;
            }
          }
        }

        > .item-description {
          height: 5rem;
          margin: 0;
          margin-bottom: $xs-gap;
          line-height: 1.8em;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: $font-size-h6;
        }

        > .item-meta {
          height: 2em;
          line-height: 2em;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          overflow: hidden;
          font-size: $font-size-small;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: normal;

          > .date {
            text-transform: uppercase;
          }

          > .views {
            min-width: 4rem;
          }

          > .likes {
            > .liked {
              color: $red;
            }
          }

          > .likes,
          > .comments {
            min-width: 3em;
          }

          > .date,
          > .views,
          > .comments,
          > .likes,
          > .tags,
          > .categories {
            > .iconfont {
              margin-right: $xs-gap;
            }
          }

          > .tags,
          > .categories {
            a {
              text-transform: capitalize;
              margin-right: $sm-gap;
            }
          }

          > .tags {
            margin-right: 0;
          }
        }
      }
    }
  }

</style>
