<template>
  <div id="index-page" class="container" style="margin-top: 10px">
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

    <div id="main" class="main-container">
      <!--轮播图-->
      <div class="block">
        <el-carousel :interval="4000" arrow="always" trigger="click" height="200px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div style="margin-top: 20px">
        <!--文章列表-->
        <div class="article-list-item">
          <div class="item-content">
            <!-- 封面图-->
            <div class="item-thumb">
              <span class="item-oirigin self">原创</span>
              <img class="item-thumb-img"/>
            </div>
            <!-- 标题和简介-->
            <div class="item-body">
              <h5 class="item-title">深拷贝和浅拷贝</h5>
              <p class="item-description" style="-webkit-box-orient: vertical;">前端基本技能，面试必备</p>
              <div class="item-meta">
              <span class="date">
                <i class="iconfont icon-clock"></i>
                <span>2021/06/02 22:12</span>
              </span>
                <span class="views">
                <i class="iconfont icon-view"></i>
                <span>212</span>
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
        <div class="article-list-item">
          <div class="item-content">
            <!-- 封面图-->
            <div class="item-thumb">
              <span class="item-oirigin hybrid">参考</span>
              <img class="item-thumb-img"/>
            </div>
            <!-- 标题和简介-->
            <div class="item-body">
              <h5 class="item-title">深拷贝和浅拷贝</h5>
              <p class="item-description" style="-webkit-box-orient: vertical;">前端基本技能，面试必备</p>
              <div class="item-meta">
              <span class="date">
                <i class="iconfont icon-clock"></i>
                <span>2021/06/02 22:12</span>
              </span>
                <span class="views">
                <i class="iconfont icon-view"></i>
                <span>212</span>
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
        <div class="article-list-item">
          <div class="item-content">
            <!-- 封面图-->
            <div class="item-thumb">
              <span class="item-oirigin other">转载</span>
              <img class="item-thumb-img"/>
            </div>
            <!-- 标题和简介-->
            <div class="item-body">
              <h5 class="item-title">深拷贝和浅拷贝</h5>
              <p class="item-description" style="-webkit-box-orient: vertical;">前端基本技能，面试必备</p>
              <div class="item-meta">
              <span class="date">
                <i class="iconfont icon-clock"></i>
                <span>2021/06/02 22:12</span>
              </span>
                <span class="views">
                <i class="iconfont icon-view"></i>
                <span>212</span>
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

    <div id="aside" class="aside-container">
      <!--搜索框-->
      <div class="aside-search">
        <div class="search-box">
          <input
            id="keyword"
            v-model.trim="keyword"
            required
            list="keywords"
            type="search"
            name="search"
            class="search-input"
            placeholder="输入关键词"
            style="text-indent:10px;"
          />
          <button class="search-btn">
            <i class="iconfont icon-search"/>
          </button>
        </div>
      </div>
      <!--热门文章-->
      <div class="aside-article">

        <p class="title">
          <i class="iconfont icon-hotfill"/>
          <strong v-text="hotlist"/>
        </p>

        <ul class="aside-article-list">
          <li v-for="item in articles" :key="item.id" class="item">
            <span class="index"/>
            <nuxt-link to="/" class="title">
              <span v-text="item.title"/>
            </nuxt-link>
          </li>
        </ul>

      </div>
      <!--日历-->
      <Calendar/>
      <!--标签-->
    </div>

  </div>
</template>

<script>
  import Calendar from "~/components/common/Calendar.vue";

  export default {
    components: {
      Calendar
    },
    data() {
      return {
        keyword: "",
        hotlist: "热火朝天",
        value: new Date(),
        articles: [
          {
            "id": 1,
            "title": "111111"
          },
          {
            "id": 2,
            "title": "222222"
          },
          {
            "id": 3,
            "title": "333333"
          },
          {
            "id": 4,
            "title": "44444"
          },
          {
            "id": 5,
            "title": "555555"
          },
          {
            "id": 6,
            "title": "6666666"
          }
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  /*首页布局*/
  #index-page {
    display: -webkit-flex;
    display: flex;
  }

  .nav-container {
    margin-right: 10px;
    width: 160px;
  }

  .aside-container {
    margin-left: 10px;
    width: 266px;
  }

  .main-container {
    width: 596px;
  }

  /*轮播图*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
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

  /*aside*/
  #aside {
    display: block;
    width: $aside-width;
    margin: 0;
    margin-left: $lg-gap;
    user-select: none;

    .aside-search,
    .aside-article,
    .aside-calendar,
    .aside-friendlink,
    .aside-tag {
      margin-bottom: $lg-gap;
    }

    .aside-search {
      padding: $sm-gap;
      width: 100%;
      height: 3em;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      background-color: #eee;

      .search-input,
      .search-btn,
      .sitemap-btn {
        height: 2em;
        line-height: 2em;
        background-color: $module-hover-bg;

        &:hover {
          background-color: $module-hover-bg-darken-20;
        }
      }

      > .search-box {
        display: flex;
        flex-grow: 1;

        > .search-input {
          margin-right: 0;
          flex-grow: 1;

          &::-webkit-calendar-picker-indicator {
            display: none;
          }
        }

        > .search-btn {
          width: 2em;
          background-color: $module-hover-bg-darken-20;

          &:hover {
            background-color: $module-hover-bg-darken-40;
          }
        }
      }

      > .sitemap-btn {
        display: inline-block;
        text-align: center;
        margin-left: $sm-gap;
        width: 3em;

        > .iconfont {
          font-size: $font-size-h3;
        }
      }
    }

    > .aside-article {
      overflow: hidden;
      background-color: #eee;

      > .title {
        height: 3em;
        line-height: 3em;
        margin: 0;
        padding: 0 $gap;
        border-bottom: 1px dashed #eee;
        text-transform: uppercase;

        .iconfont {
          margin-right: $sm-gap;
        }
      }

      > .aside-article-list {
        list-style: none;
        padding: $sm-gap 0;
        margin-bottom: 0;
        counter-reset: hot-article-list;

        .item {
          display: block;
          height: 1.9em;
          line-height: 1.9em;
          padding: 0 $gap;
          margin-bottom: $sm-gap;
          color: $text-dark;

          &:nth-child(1) {
            .index {
              color: $text-reversal;
              background-color: $primary-opacity-5;
            }
          }

          &:nth-child(2) {
            .index {
              color: $text-reversal;
              background-color: rgba($accent, 0.6);
            }
          }

          &:nth-child(3) {
            .index {
              color: $text-reversal;
              background-color: rgba($red, 0.6);
            }
          }

          &:last-child {
            margin: 0;
          }

          .index {
            color: $text-secondary;
            counter-increment: hot-article-list;
            background-color: $module-hover-bg;
            width: 1.5em;
            height: 1.5em;
            line-height: 1.5em;
            display: inline-block;
            text-align: center;
            margin-right: $sm-gap;
            font-size: $gap;

            &::before {
              content: counter(hot-article-list);
            }
          }

          .title {
            font-size: $font-size-h6;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>
