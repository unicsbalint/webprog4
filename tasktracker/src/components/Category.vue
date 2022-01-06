
<template>
  <div>
     
<!--  -->
        <div class="card w-75">
            <div class="card-body">
                <h5 class="card-title">{{category.title}}</h5>

                <div id="task">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                            <p class="card-text">Here comes the task title</p>
                        </div>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary">Add new task</button>
                </div>
                
            </div>
        </div>
      <!-- // -->
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
}
</script>

<style>

</style>