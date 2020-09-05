import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as netlifyIdentityWidget from 'netlify-identity-widget'
import GoTrue from 'gotrue-js'
import VueFirestore from 'vue-firestore'

Vue.config.productionTip = false

// Init Netlify identity
netlifyIdentityWidget.init()

// Init GotTrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: 'https://competent-sammet-f311a8.netlify.app/.netlify/identity',
  setCookie: true
})

// Init Vue Firestore
Vue.use(VueFirestore)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
