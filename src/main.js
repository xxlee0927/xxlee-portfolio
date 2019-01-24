import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import 'normalize.css'
import './styles/style.scss'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : 'xxlee'
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
