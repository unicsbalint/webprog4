
<template>
    <div id="container">
        <div style="display: inline-flex; margin-right: 2rem">
            <Table></Table>
            <AddNewCategory></AddNewCategory>
        </div>
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
#container{
    margin-top: 5%;
    margin-left: 5%;

}


</style>