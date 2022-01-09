
<template>
  <div id="board">
      <div v-for="category in getCategories" :key="category.id">
          <Category :category=category></Category>
      </div>
  </div>
</template>

<script>
import Category from "./Category";

export default {
    components:{
        Category      
    },
    computed: {
        getCategories () {
            return this.$store.getters.getCategories
        }
    },

}
</script>

<style>
#board{
    display: inline-flex;
}
</style>