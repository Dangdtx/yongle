import Vue from 'vue'
import App from './App.vue'
import store from "store"
import router from "router/index.js"
import "./common/filter"
import VueTouch from "vue-touch"
import "./common/components/index.js"

Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})
new Vue({ 
  store,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
