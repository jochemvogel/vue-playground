import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAkUQ8M9SFAwcSSK73hhBDq0cP5wNv2fqw',
  authDomain: 'vue-dashboard-35551.firebaseapp.com',
  databaseURL: 'https://vue-dashboard-35551.firebaseio.com',
  projectId: 'vue-dashboard-35551',
  storageBucket: 'vue-dashboard-35551.appspot.com',
  messagingSenderId: '912374874257',
  appId: '1:912374874257:web:075e8151921b24d8ef3f30'
})

export const db = firebaseApp.firestore()
