// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible/index.js'
import './assets/css/global.css' /* 引入公共样式 */
import store from './store'
import api from './api'
import VueCookie from 'vue-cookie'
import './vant'

Vue.use(VueCookie)
Vue.prototype.$axios = api

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    next()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
