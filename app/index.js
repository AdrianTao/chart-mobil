// vue
import Vue from 'vue'

// vue-router vuex 
// import router from './router/'
import store from './store/'

import App from './App.vue'

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})