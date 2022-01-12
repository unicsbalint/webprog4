import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories:[
            {id:0, title:"Backlog"},
            {id:1, title:"Doing"}
        ],
        tasks:[
            {id:0,title:"VUE JS HAND IN PROJECT",description:"Description for test 1",category_id:1},
            {id:1,title:"CLEAN CODE",description:"Description for test 2",category_id:1},
            {id:3,title:"A lot to do",description:"Another description but for another category",category_id:0},
        ]
    },
    getters: {
        getCategories(state) {
            return state.categories
        },
        getTasks(state) {
            return state.tasks
        },
        getTasksById: (state) => (category_id) => {
            let arr = [];
            state.tasks.forEach(task => {
                if(task.category_id == category_id){
                    arr.push(task);
                }
            });
            return arr;
//          return state.tasks.find(task => task.category_id == category_id)
        }
    },
    mutations: {
        ADDCATEGORY(state, newCategory) {
            let max = 0;
            state.categories.forEach(category => {
                if(category.id > max) max = category.id;
            });
            max++;

            state.categories.push({id:max,title:newCategory});
        },
        ADDTASK(state, task){
            let max = 0;
            state.tasks.forEach(task => {
                if(task.id > max) max = task.id;
            });
            max++;
            state.tasks.push({id:max,title:task.task,description:task.description,category_id:task.categoryId});
        },
        MODIFYTASK(state,modifiedTask){
            state.tasks.forEach(task => {
                if(task.id == modifiedTask.id){
                    task.title = modifiedTask.task;
                    task.description = modifiedTask.description;
                }
            });
        },
        MOVETASK(state,data){
            let taskId = data.taskId;
            let categoryId = data.categoryId;
            state.tasks.forEach(task => {
                if(task.id == taskId){
                    task.category_id = categoryId;
                }
            })
        }
    },
    actions: {
        addCategory(context, newCategory) {
            context.commit('ADDCATEGORY', newCategory)
        },
        addTask(context,task){
            context.commit('ADDTASK', task);
        },
        modifyTask(context,task){
            context.commit('MODIFYTASK', task);
        },
        moveTask(context,data){
            context.commit('MOVETASK', data);
        }
    },
})
