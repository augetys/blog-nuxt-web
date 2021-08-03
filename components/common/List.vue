<template>
  <div class="article-list">
    <transition name="module" mode="out-in">
      <transition-group
        v-if="article && article.length"
        key="list"
        name="fade"
        tag="div"
      >
        <list-item
          v-for="(articleItem) in article"
          :key="articleItem.id"
          :article="articleItem"
        />
      </transition-group>
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
