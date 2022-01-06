
<template>
  <div style="display: inline-flex; margin-right: 2rem">
      <Table></Table>
      <AddNewCategory></AddNewCategory>
  </div>
</template>

<script>
import AddNewCategory from './AddNewCategory'
import Table from './Table'

export default {
    components:{
        AddNewCategory,
        Table
    }
}
</script>

<style>

</style>