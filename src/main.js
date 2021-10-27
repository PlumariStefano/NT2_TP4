import Vue from 'vue'
import App from './App.vue'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' // Style libraries.
import { router } from './router' // Libraries for router
import './form' // Libraries for FormularioAV
import './axios' //Libraries for Axios

Vue.config.productionTip = false

new Vue({
  router, // es igual a -> router: router
  render: h => h(App),
}).$mount('#app')
