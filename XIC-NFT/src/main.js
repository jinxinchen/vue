import Vue from 'vue'

// router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// ElementUI & css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import './css/style.css'

// API
import axios from './conf/axios_config.js';
import api from './conf/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

// 运行实例
import App from './App.vue'

new Vue({
  el: '#app',
  render: c => c(App),
  router,
})