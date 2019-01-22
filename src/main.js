import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
export const bus = new Vue();
Vue.use(BootstrapVue)

new Vue({
  created () {
    AOS.init()
  },
  el: '#app',
  render: h => h(App)
})
