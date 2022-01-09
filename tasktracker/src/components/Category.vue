
<template>
  <div>
        <div class="card w-75">
            <div class="card-body">
                <h5 class="card-title">{{category.title}}</h5>

                <div id="task">
                    <div v-for="task in getTasksById" :key=task.id class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                            <p class="card-text">{{task.title}}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary">Add new task</button>
                </div>           
            </div>
        </div>
  </div>
</template>

<script>

export default {
    components:{
        
    },
    props: [
        'category'
    ],
    data() {
        return{
        }
    },
    mounted(){
        console.log(this.getTasksById);
    },
    computed: {
        getTasksById () {
            return this.$store.getters.getTasksById(this.category.id)
        }
    },
}
</script>

<style>

</style>