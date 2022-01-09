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
            {title:"DOING TESZT",category_id:1},
            {title:"DOING TESZT 2",category_id:1},
            {title:"BACKLOG TESZT",category_id:0},
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
            state.tasks.push({title:task.task,category_id:task.categoryId});
        }
    },
    actions: {
        addCategory(context, newCategory) {
            context.commit('ADDCATEGORY', newCategory)
        },
        addTask(context,task){
            context.commit('ADDTASK', task);
        }
    },
})
