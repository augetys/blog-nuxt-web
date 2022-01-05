<template>
  <div>
    <div class="article-page">
      <div ref="detail" class="detail">

        <transition name="module" mode="out-in">
          <div class="oirigin" :class="originClass">
            <span>{{originText }}</span>
          </div>
        </transition>


        <div key="knowledge" class="knowledge">
          <template>
            <h2 class="title">{{articleDetail.title}}</h2>
            <div id="article-content" key="article-content" class="content markdown-body" v-highlight
                 v-html="articleDetail.content"></div>
          </template>
        </div>

        <div class="transport" v-if="this.articleDetail.isOriginal === 0">
          <p>————————————————</p>
          <p class="title">
            版权声明：本文为{{articleDetail.articleAuthor}}的原创文章，转载请附上原文出处链接及本声明。
          </p>
          <p>原文链接：{{articleDetail.articlePart}}</p>
        </div>

      </div>
    </div>
    <Comment :comments="comments" :articleId="articleId" v-if="this.articleDetail.openComment === 1"/>
  </div>
</template>

<script>
  import {getArticlesById} from "~/api/blog";
  import {getCommentByArticleId} from "~/api/blog";
  import {OriginState} from "~/constants/system";
  import Comment from "~/components/common/Comment.vue";

  export default {
    layout: 'center',
    name: "ArticleDetail",
    components: {
      Comment
    },
    data() {
      return {
        articleId: ''
      }
    },
    async asyncData({params}) {
      let [articleDetail, comments] = await Promise.all([
        getArticlesById(params.id),
        getCommentByArticleId({id: params.id, pageSize: 10, pageNum: 1})
      ])
      return {
        articleDetail: articleDetail.data,
        comments: comments.data.list
      }
    },
    computed: {
      originText() {
        if (this.articleDetail.isOriginal === 1) {
          return OriginState.OriginalText;
        }
        if (this.articleDetail.isOriginal === 0) {
          return OriginState.ReprintText;
        }
      },
      originClass() {
        if (this.articleDetail.isOriginal) {
          return "self";
        }
        if (this.articleDetail.isOriginal !== OriginState.Reprint) {
          return "other";
        }
      }
    },
    created() {
      this.articleId = this.$route.params.id
    },
  }
</script>

<style lang="scss">
  // workaround css scoped
  .inputBox {
    width: 450px;
    margin: 0 auto;
  }

  .inputBox h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;;
  }

  .transport{
    color: red;
    margin-top: 10px;
  }
  .transport p{
    padding-top: 10px;
  }

  .inputBox input {
    position: relative;
    width: 100%;
    height: 60px;
    border: none;
    margin: 15px 0 20px;
    background: transparent;
    outline: none;
    padding: 0 20px;
    font-size: 24px;
    letter-spacing: 4px;
    box-sizing: border-box;
    border-radius: 8px;
    color: #333;
    box-shadow: -4px -4px 10px rgba(255, 255, 255, 1),
    inset 4px 4px 10px rgba(0, 0, 0, 0.05),
    inset -4px -4px 10px rgba(255, 255, 255, 1),
    4px 4px 10px rgba(0, 0, 0, 0.05);
  }

  .inputBox input::-webkit-input-placeholder {
    letter-spacing: 0px;
    font-size: 20px;
  }

  .inputBox #btn {
    position: relative;
    cursor: pointer;
    color: #fff;
    background: #333;
    font-size: 20px;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    user-select: none;
  }

  .inputBox #btn:active {
    background: #9c27b0;
    user-select: none;
  }

  .article-page {
    .share-box {
      .share-ejector {
        background-color: #eee;
      }
    }
  }
</style>

<style lang="scss">
  .article-page {
    /*padding-top: 6.236rem;*/

    > .detail,
    > .mammon,
    > .share,
    > .metas,
    > .related {
      margin-bottom: $lg-gap;
      background-color: $module-bg;
    }

    > .mammon {
      padding: $gap;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .mammon-ins {
        width: 100%;
        height: 16rem;
        min-height: 16rem;
      }

      .skeleton {
        width: 100%;
      }
    }

    > .detail {
      padding: 1rem 2rem;
      position: relative;
      overflow: hidden;
      height: auto;
      transition: height $transition-time-normal;

      > .skeleton {
        .title {
          width: 60%;
          height: 26px;
          margin: 2rem auto;
        }

        .content {
          margin-top: 3rem;
          margin-bottom: 1rem;
        }
      }

      > .oirigin {
        position: absolute;
        top: -11px;
        left: -29px;
        transform: rotate(-45deg);
        width: 7rem;
        height: 4rem;
        line-height: 5.8rem;
        text-align: center;
        text-transform: uppercase;
        transform-origin: center;
        color: $text-reversal;
        font-weight: bold;
        font-size: $font-size-small;

        &.self {
          background-color: rgba($accent, 0.8);
        }

        &.other {
          background-color: rgba($red, 0.8);
        }

        &.hybrid {
          background-color: rgba($yellow, 0.8);
        }
      }

      > .knowledge {
        > .title {
          margin: 1em 0 1.5em 0;
          text-align: center;
          font-weight: 700;
          font-size: $font-size-h2 * 0.95;
        }

        > .content {
          > .google-auto-placed {
            margin-bottom: $sm-gap;
          }

          iframe {
            width: 100%;
            margin-bottom: 1em;
            background-color: #000;
          }

          a {
            font-weight: bold;
            margin: 0 0.1em;

            &.image-link {
              margin: 0;
            }

            &:hover {
              text-decoration: underline;
            }
          }

          img {
            max-width: 100%;
            position: relative;
            margin: 0 auto;
            display: block;
            text-align: center;
            border-radius: $radius;
            border: $sm-gap solid $module-hover-bg;
            opacity: 0.9;
            cursor: pointer;

            &:hover {
              opacity: 1;
              transition: all $transition-time-normal;
            }
          }

          p {
            line-height: 2.2em;
            text-indent: 2em;
            margin-bottom: 1em;

            &.text-center {
              text-align: center;
            }

            &.text-right {
              text-align: right;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.8em;
            font-weight: 700;
            text-indent: 0;
          }

          blockquote {
            p {
              &:last-child {
                margin-bottom: 0;
              }
            }
          }

          ul {
            list-style-type: square;
          }

          ul,
          ol {
            > li {
              line-height: 1.8em;
              padding: 0.5em 0.8em;

              &:hover {
                background-color: $module-hover-bg;
              }

              > p {
                text-indent: 0;
              }

              > ul {
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }

          code {
            color: #bd4147;
            padding: 0.3em 0.5em;
            margin: 0 0.5em;
            border-radius: $radius;
            background-color: $module-hover-bg;
          }

          pre {
            $code-header-height: 2.8rem;
            $code-number-width: 3rem;
            $code-row-line-height: 1.8rem;
            $code-font-size: $font-size-h6;
            display: block;
            position: relative;
            overflow: hidden;
            margin-bottom: 1em;
            padding-left: $code-number-width;
            font-size: $code-font-size;
            background-color: rgba($black, 0.8);


            > .code-lines {
              position: absolute;
              left: 0;
              top: $code-header-height;
              margin: 0;
              padding: 1rem 0;
              width: $code-number-width;
              height: calc(100% - #{$code-header-height});
              text-align: center;
              background-color: rgba($black, 0.2);

              > .code-line-number {
                padding: 0;
                position: relative;
                list-style-type: none;
                line-height: $code-row-line-height;
                font-size: $font-size-small;
                user-select: none;
                transition: none;

                &:hover {
                  &:before {

                  }
                }

                &:before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: $code-number-width;
                  width: 66em;
                  height: 100%;
                  background-color: rgba(154, 154, 154, 0.2);
                }
              }
            }

            > code {
              margin: 0;
              padding: 1rem;
              float: left;
              width: 100%;
              height: 100%;
              display: block;
              line-height: $code-row-line-height;
              color: rgba($white, 0.87);
              background-color: transparent;
            }
          }

        }

        @keyframes readmorebtn {
          0% {
            transform: translate3d(0, 0, 0);
            background-color: $module-hover-bg;
          }
          25% {
            transform: translate3d(0, $sm-gap, 0);
            background-color: $primary;
            color: $white;
          }
          50% {
            transform: translate3d(0, 0, 0);
            background-color: $module-hover-bg;
          }
          75% {
            transform: translate3d(0, $sm-gap, 0);
            background-color: $primary;
            color: $white;
          }
          100% {
            transform: translate3d(0, 0, 0);
            background-color: $module-hover-bg;
          }
        }

        > .readmore {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: $gap;

          > .readmore-btn {
            width: 80%;
            text-align: center;
            height: 3rem;
            line-height: 3rem;
            background-color: $module-hover-bg;
            animation: readmorebtn 4s linear infinite;

            &[disabled] {
              cursor: no-drop;
            }

            &:hover {
              background-color: $primary !important;
              color: $white !important;
            }

            > .iconfont {
              margin-left: $sm-gap;
            }
          }
        }
      }
    }
  }
</style>
