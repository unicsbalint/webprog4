
<template>
    <div>
        <div style="min-width: 300px">
                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">{{category.title}}</h5>

                        <div id="task">
                            <div @click.prevent="showModal(task)" v-for="task in getTasksById" :key=task.id class="card bg-light mb-3" style="max-width: 18rem; cursor: pointer;">
                                <div class="card-body">
                                    <p style="font-weight: bold" class="card-text">{{task.title}}</p>
                                    <p class="description">{{task.description}}</p>
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
                <span :id="category.title+'_'+category.id+'_close'" class="close">&times;</span>
                <input v-model="newTask" style="margin-bottom: 1rem" class="form-control" type="text" placeholder="Enter the title of the new task">
                <textarea v-model="newTaskDescription" style="margin-bottom: 1rem" class="form-control" type="text" placeholder="Description"></textarea>
                <div v-if="!modify">
                    <button @click.prevent="addNewTask()" class="btn btn-success">Add new task</button>
                </div>
                <div v-else>
                    <button @click.prevent="modifyTask()" class="btn btn-success">Modify task</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{
            newTask: "",
            newTaskDescription:"",
            modify: false,
            modifyId: null,
        }
    },
    methods:{
        showModal(task = {}){
            if(task.id != null){
                this.modify = true;
                this.newTask = task.title;
                this.newTaskDescription = task.description;
                this.modifyId = task.id;
            }
            else{
                this.modify = false;
                this.newTask = "";
                this.newTaskDescription = "";
            }
            var modal = document.getElementById(this.category.title+'_'+this.category.id);
            var span = document.getElementById(this.category.title+'_'+this.category.id+'_close');
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
            this.$store.dispatch('addTask', {task:this.newTask, description: this.newTaskDescription, categoryId: this.category.id});
            this.newTask = "";
            this.newTaskDescription = "";

            var modal = document.getElementById(this.category.title+'_'+this.category.id);
            modal.style.display = "none";
        },
        modifyTask(){
            if(this.newTask.length < 3){
                alert("Please add a proper task");
                return;
            }
            this.$store.dispatch('modifyTask', {id:this.modifyId,task:this.newTask, description: this.newTaskDescription});
            this.newTask = "";
            this.newTaskDescription = "";
            this.modifyId = null;

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
    .description{
        font-style: italic; 
        background-color: rgba(128, 128, 128, 0.281);
        padding: 20px;
        border-radius: 10px;
    }
</style>