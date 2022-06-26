import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.css'
import './styles/app.scss'
// css 初始化
import 'normalize.css/normalize.css'
Vue.config.productionTip = false

import "@/mixins/mixins.global.js";

import "./rem"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
