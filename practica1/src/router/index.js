import VueRouter from 'vue-router'
import Vue from 'vue'
import Inicio from '../components/Inicio.vue' 
import Fin from '../components/Fin.vue' 
import Bread from '../components/Bread.vue'
Vue.use(VueRouter)
const routes =[
    //la ruta base 
    {
        path:'/',
        redirect: '/fosterApp'
    },
    {
        path:"/",
        component:{
            render(c){
                return c('router-view');
            },
        },
        children:[
            {
                path:'/inicio',
                name:'inicio',
                component: Inicio 
            },
            {
                path:'/fin',
                name:'fin',
                component: Fin 
            },
            {
                path:'/bread',
                name:'bread',
                component: Bread 
            }
        ]
    }
]
const router = new VueRouter({routes,})
export default router;