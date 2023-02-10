import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap.js'
import store from './config/store'
import router from './config/router'

import './plugins/axios'

Vue.config.productionTip = false

new Vue({
  store, //colocando aqui significa que pode ser compartilhada entre os coponentes.
  router,
  render: h => h(App)
}).$mount('#app')