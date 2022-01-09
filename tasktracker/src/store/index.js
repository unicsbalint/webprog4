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
            {id:0, title:"DOING TESZT",category_id:1},
            {id:1, title:"DOING TESZT 2",category_id:1},
            {id:2, title:"BACKLOG TESZT",category_id:0},
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
        SHOWEDITMENU(state) {
            state.showEditMenu = !state.showEditMenu;
        },
    },
    actions: {
        showEditMenu(context) {
            context.commit('SHOWEDITMENU')
        },
    },
})
