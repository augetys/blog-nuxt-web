<template>
  <div class="about-page">
    <div class="about-photo">
      <img src="https://photo.choot.top/1.jpg" alt="江南小镇" class="about-photo-me">
    </div>
    <div class="about-me">
      <div class="description">
        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-introduction"></use>
          </svg>
          <p class="bio">
          <span>
           一杯茶，一包烟，一个Bug改一天
          </span>
          </p>
        </div>

        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-personality"></use>
          </svg>
          <span>
           酒池肉林、日夜笙歌、依翠偎红、五音六律、目营心匠、桀骜不羁
          </span>
        </div>

        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-motto"></use>
          </svg>
          <span class="music">
            路为纸，地成册，行作笔，心当墨，思无界，行有疆
          </span>
        </div>

        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-hobby"></use>
          </svg>
          <span class="like-text">武侠古风，二次元，跑步，游戏</span>
        </div>

        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-address"></use>
          </svg>
          <a class="address">湖北 , 武汉</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .about-page {
    width: 595px;
    overflow: hidden;

    .about-photo {
      width: 100%;
      margin-bottom: 10px;
      .about-photo-me {
        width: 100%;
        height: 300px;
      }
    }

    .about-me {
      width: 100%;
      height: auto;
      margin-bottom: $lg-gap;
      overflow: hidden;
      display: flex;
      justify-content: space-between;

      > .description {
        min-width: 53rem;
        flex-grow: 1;
        padding: 2rem 3rem;
        background-color: $module-bg;

        > .item {
          line-height: 2.5em;
          min-height: 2.5em;
          margin-bottom: 1.2rem;

          &:last-child {
            margin-bottom: 0;
          }

          > .icon {
            width: 1.4em;
            height: 1.4em;
            margin-right: 1em;
            vertical-align: -0.3em;
            fill: currentColor;
            overflow: hidden;

            &.icon-social {
              color: #ffa800;
            }

            &.icon-tibet-1 {
              color: $primary;
            }

            &.icon-like {
              color: $red;
            }

            &.icon-friend {
              color: $accent;
            }
          }

          > .bio {
            display: inline-block;

            margin: 0;
          }

          > .like-text {
            font-family: "webfont-bolder", DINRegular;
          }

          > .address {
            border-bottom: 1px solid;
          }

          > .music {
            .spotify {
              margin-left: $xs-gap;
              color: #1db954;
            }

            .music-163 {
              color: #c20c0c;
            }
          }

          > .friends {
            > a {
              margin-right: 1em;
              text-transform: capitalize;
            }
          }

          > .social-media-accounts {
            $button-size: 2rem;

            > .normal {
              > .item {
                display: inline-block;
                height: $button-size;
                line-height: $button-size;
                padding: 0 $sm-gap;
                margin-right: $sm-gap;
                border-radius: $radius * 2;
                color: $text-reversal;
                user-select: none;

                > .text {
                  font-size: $font-size-small;
                }

                &.github {
                  background-color: #24282d;

                  &:hover {
                    background-color: #000;
                  }
                }

                &.twitter {
                  background-color: #1b95e0;

                  &:hover {
                    background-color: #0c7abf;
                  }
                }

                &.instagram {
                  opacity: 0.8;
                  background: #f09433;
                  background: linear-gradient(
                      45deg,
                      #f09433 0%,
                      #e6683c 25%,
                      #dc2743 50%,
                      #cc2366 75%,
                      #bc1888 100%
                  );

                  &:hover {
                    opacity: 1;
                  }
                }
              }
            }

            > .mini {
              > .item {
                display: inline-block;
                width: $button-size;
                height: $button-size;
                line-height: $button-size;
                margin-right: $sm-gap;
                text-align: center;
                border-radius: 100%;
                color: $text-reversal;
                opacity: 0.8;

                &:hover {
                  opacity: 1;
                }

                .iconfont {
                  font-size: $font-size-small;
                }

                &.telegram {
                  background-color: #54a5dd;
                }

                &.zhihu {
                  background-color: #3582f7;
                }

                &.youtube {
                  background-color: #ec3323;
                }

                &.bilibili {
                  background-color: #449fd1;
                }

                &.stackoverflow {
                  background-color: #e6863d;
                }

                &.algorithm {
                  background-color: #fea116;
                }

                &.quora {
                  background-color: #b92b27;
                }

                &.linkedin {
                  background-color: #478cc5;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
