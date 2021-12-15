<template>
  <!--右侧内容-->
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
          @keydown.enter="handleSearch"
        />
        <button class="search-btn">
          <i class="iconfont icon-search" @click="handleSearch" />
        </button>
      </div>
    </div>
    <!--热门文章-->
    <div class="aside-article">

      <p class="title">
        <i class="iconfont icon-hotfill"/>
        <strong v-text="hotTitle"/>
      </p>

      <ul class="aside-article-list">
        <li v-for="item in hotArticles" :key="item.id" class="item">
          <span class="index"/>
          <nuxt-link :to="`/article/${item.id}`" class="title">
            <span v-text="item.title"/>
          </nuxt-link>
        </li>
      </ul>

    </div>
    <!--日历-->
    <Calendar/>
    <!--标签-->
    <div class="aside-sticky-box">
      <div class="aside-tag">
        <ul class="aside-tag-list">
          <li v-for="(item,index) in tags" :key="index" class="item">
            <nuxt-link :to="`/tag/${item.id}`">
              <div class="title">
                <i :class="`${item.icon}`" class="iconfont"/>
                <span class="name">
                  <span>{{ item.name }}</span>
                  <span>({{ item.num }})</span>
                </span>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Calendar from "~/components/common/Calendar.vue";
  import {mapState} from "vuex";

  export default {
    name: "PcAside",
    components: {
      Calendar
    },
    data() {
      return {
        keyword: "",
        hotTitle: "热火朝天"
      }
    },
    methods: {
      handleSearch() {
        const keyword = this.keyword;
        this.$router.push({name: 'search-keyword', params: {keyword}});
      }
    },
    computed: {
      ...mapState({
        tags: state => state.tags.data,
        hotArticles: state => state.hotArticles.data,
      })
    }
  }
</script>

<style lang="scss" scoped>
  .aside-container {
    margin-left: 10px;
    width: 266px;
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

    /*标签*/
    .aside-sticky-box {
      $top-height: $header-height + $lg-gap;
      $tool-height: 3rem;
      position: sticky;
      top: $top-height;
      width: $aside-width;
      margin-bottom: 1.236rem;
      background-color: #eee;

      > .aside-tag {
        max-height: calc(
          100vh - 88px - #{$top-height + $lg-gap + $lg-gap + $tool-height}
        );
        overflow-y: auto;
      }

      > .aside-tag {
        width: 100%;
        padding-left: $gap;
        border-top: $gap solid transparent;
        border-bottom: $gap solid transparent;

        .empty-box {
          padding-right: $gap;
          padding-bottom: $gap;
        }

        .aside-tag-list {
          list-style: none;
          padding: 0;
          margin: 0;
          overflow: hidden;

          .item {
            display: inline-flex;
            margin-right: $sm-gap;
            margin-bottom: $gap;
            height: 2em;
            line-height: 2em;
            font-size: $font-size-h6;
            text-transform: capitalize;

            &:last-child {
              margin: 0;
            }

            &:hover {
              .title {
                .iconfont {
                  background-color: $module-hover-bg;
                  cursor: pointer;
                }

                .name {
                  background-color: $module-hover-bg-darken-20;
                  cursor: pointer;
                }
              }
            }

            .title {
              display: flex;

              .iconfont {
                width: 2em;
                text-align: center;
                background-color: $module-hover-bg-opacity-3;
              }

              .name {
                display: block;
                padding: 0 $sm-gap;
                background-color: $module-hover-bg;
              }
            }
          }
        }
      }

      > .aside-friendlink {
        padding-left: $gap;
        border-top: $gap solid transparent;
        border-bottom: $gap solid transparent;

        span {
          font-size: 16px;
        }

        > .tag-items {
          a {
            display: inline-block;
            padding: 5px;
            border: #dfe6e9 solid 1px;
            margin: 4px 2px 4px 0px;
          }
        }
      }
    }

  }
</style>
