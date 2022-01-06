
<template>
  <div id="board">
      <div v-for="category in categories" :key="category.id">
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
    data() {
        return{
            categories: [
                {id:0, title:"Backlog"},
                {id:1, title:"Doing"},
            ]
        }
    },
}
</script>

<style>
#board{
    display: inline-flex;
}
</style>