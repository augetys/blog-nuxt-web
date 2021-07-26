<template>
  <header id="header" class="header">
    <div class="header-container container">
      <div class="header-header">
        <div class="header-logo">
          <h1>Blog</h1>
        </div>
        <span class="header-slogan">吾生也有涯，而知也无涯</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "PcHeader"
  }
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: $header-height;
    z-index: $z-index-header;
    background-color: $module-bg;
    user-select: none;
    // 过段时间再打开吧，闪屏太严重了
    // @include backdrop-blur();

    .header-container {
      height: 100%;
      display: flex;
      justify-content: space-between;

      .header-header {
        height: 100%;
        display: flex;
        position: relative;
        align-items: center;
        padding-left: $sm-gap;
        width: 29em;
        overflow: hidden;

        @keyframes logo-blink {
          0% {
            mask-position: -30%;
          }
          100% {
            mask-position: 666%;
          }
        }

        .header-logo {
          color: #ad6598;
          width: 11rem;
          margin-right: $gap * 4;
          mask-size: 88%;
          mask-position: -30%;
          mask-image: linear-gradient(
              to bottom right,
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0.2)
          );
          animation: logo-blink 8s ease-in 1s infinite;
        }

        .header-slogan {
          color: $primary;
          font-family: "webfont-normal", DINRegular;
        }

        .header-link {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
