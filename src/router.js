import Vue from 'vue'
import VueRouter from "vue-router"

import FormularioAv from './componentes/FormularioAV/index.vue'
import Usuarios from './componentes/Usuarios.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: 'binding'},
        { path: '/formulario-av', component: FormularioAv },
        { path: '/usuarios', component: Usuarios }

    ]
})