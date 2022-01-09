
<template>
    <div>
        <div style="min-width: 300px">
                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">{{category.title}}</h5>

                        <div id="task">
                            <div v-for="task in getTasksById" :key=task.id class="card bg-light mb-3" style="max-width: 18rem; cursor: pointer;">
                                <div class="card-body">
                                    <p class="card-text">{{task.title}}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button @click.prevent="showModal()" class="btn btn-primary">Add new task</button>
                        </div>           
                    </div>
                </div>
                
        </div>
        <div :id="category.title+'_'+category.id" class="taskModal">
            <div class="taskModalContent">
                <span class="close">&times;</span>
                <input v-model="newTask" style="margin-bottom: 1rem" class="form-control" type="text" placeholder="Enter the title of the new task">
                <button @click.prevent="addNewTask()" class="btn btn-success">Add new task</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{
            newTask: "",
        }
    },
    methods:{
        showModal(){
            var modal = document.getElementById(this.category.title+'_'+this.category.id);
            var span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";

            span.onclick = function() {
            modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        },
        addNewTask(){
            if(this.newTask.length < 3){
                alert("Please add a proper task");
                return;
            }
            this.$store.dispatch('addTask', {task:this.newTask, categoryId: this.category.id});
            this.newTask = "";
            
            var modal = document.getElementById(this.category.title+'_'+this.category.id);
            modal.style.display = "none";
        }
    },
    props: [
        'category'
    ],
    computed: {
        getTasksById () {
            return this.$store.getters.getTasksById(this.category.id)
        },
    },
}
</script>

<style>
    .taskModal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
    }

    .taskModalContent {
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 500px;
    }

    .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    }

    .close:hover,
    .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
    }
</style>