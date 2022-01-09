<template>
      <div>
        <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-body">
                <p class="card-text">Here comes the category title</p>
                <input v-model="newCategory" style="margin-bottom: 1rem" class="form-control" type="text">
                <button @click.prevent="addCategory()" class="btn btn-secondary">Add new category</button>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return{
      newCategory: ""
    }
  },
  methods:{
    addCategory(){
      if(this.newCategory.length < 2){
        alert("Please add a valid category");
        return;
      }
      console.log("Add category: ", this.newCategory);
      this.$store.dispatch('addCategory', this.newCategory)
      this.newCategory = "";
    }
  }
}
</script>

<style>

</style>