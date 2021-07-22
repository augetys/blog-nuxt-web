<template>
  <div>
     <main-view />
  </div>
</template>
<script>
  import Vue from "vue";
  import MainView from "~/components/layout/Main.vue";
  export default Vue.extend({
    name:"App",
    components: {
      MainView
    },
  })
</script>
<style>

</style>
