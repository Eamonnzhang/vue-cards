// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCards from '../../packages/index'
// import '../lib/theme-chalk/index.css'
import '../../packages/theme-chalk/lib/index.vw.css'

Vue.use(VueCards)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#mobile',
  router,
  render: h => h(App)
})
