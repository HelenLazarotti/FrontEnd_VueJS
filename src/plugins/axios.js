import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = 'https://lazarottiplanning-default-rtdb.firebaseio.com/' //meu banco criado no firebase

axios.defaults.headers.get['Accepts'] = 'application/json'

//crio axios de forma global, p dps poder usar só o $http:
Vue.use ({
    install(Vue) {
        Vue.prototype.$http = axios

        Vue.prototype.$http.interceptors.request.use(config => {
            return config
        })

        Vue.prototype.$http.interceptors.request.use(res => {
            return res
        }, err => Promise.reject(err))
    }
})

