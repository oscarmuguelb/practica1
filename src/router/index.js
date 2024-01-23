import VueRouter from 'vue-router'
import Vue from 'vue'
import Inicio from '../components/Inicio.vue' 
import Fin from '../components/Fin.vue' 
import Bread from '../components/Bread.vue'
import Error404 from '../views/ErrorPages/Error404.vue'
import Formulario from '../components/Formulario.vue'

Vue.use(VueRouter)
const routes =[
    //la ruta base 
    {
        path:'/',
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
            },
            {
                path:'/404',
                name:'404',
                component: Error404 
            },
            {
                path:'/formulario',
                name:'formulario',
                component: Formulario 
            },
            {
                path:'*',
                redirect: '/404'
            }
        ]
    }
]
const router = new VueRouter({routes,})
export default router;