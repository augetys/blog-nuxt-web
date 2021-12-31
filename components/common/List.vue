<template>
  <div class="article-list">
    <transition name="module" mode="out-in">

      <div
        v-if="article && article.length"
      >
        <list-item
          v-for="(articleItem) in article"
          :key="articleItem.id"
          :article="articleItem"
        />
      </div>

      <empty-box v-else>
          <slot>空空如也。。。。。。。</slot>
      </empty-box>

    </transition>
  </div>
</template>

<script>
  import ListItem from "./item.vue";

  export default {
    name: "List",
    components: {
      ListItem
    },
    props: {
      article: {
        type:Array
      }
    }
  }
</script>

<style scoped>

</style>
