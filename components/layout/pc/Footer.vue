<template>
  <footer id="footer" class="footer">
    <div class="footer-content">©{{ year }}&nbsp;&nbsp;{{ meta.title }} <a target="_blank" href="https://beian.miit.gov.cn/">{{ meta.unit }}</a></div>
  </footer>
</template>

<script>
  import {meta} from "~/config/app.config";
  export default {
    name: "PcFooter",
    computed: {
      meta: () => meta,
      year() {
        return new Date().getFullYear();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: $footer-height;
    margin-top: $lg-gap;
    user-select: none;


    .container {
      font-size: $font-size-h6;
      text-align: center;
      text-transform: uppercase;
    }
  }
</style>
