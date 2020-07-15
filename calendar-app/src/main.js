import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyB9nXHqojvgcdEs4b-_cacJ-Xr4NZwvutU",
  authDomain: "vue-calender-70e6d.firebaseapp.com",
  databaseURL: "https://vue-calender-70e6d.firebaseio.com",
  projectId: "vue-calender-70e6d",
  storageBucket: "vue-calender-70e6d.appspot.com",
  messagingSenderId: "34846272000",
  appId: "1:34846272000:web:8a1125fca14fee90c706e5"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
