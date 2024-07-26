import {createWebHistory,createRouter} from 'vue-router'
import QuizesView from '@/views/QuizesView.vue'
import SingleQuizView from '@/views/SingleQuizView.vue'
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'quiesView',
            component:QuizesView
        },
        {
            path:'/quiz/:id',
            name:'singleQuizView',
            component:SingleQuizView
        }
    ]
})

export {router}
