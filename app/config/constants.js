import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA_Vz0ebmpoHjqp-jYc_wdUZ0M7-pRJEqg',
  authDomain: 'rene-test-project.firebaseapp.com',
  databaseURL: 'https://rene-test-project.firebaseio.com',
  projectId: 'rene-test-project',
  storageBucket: 'rene-test-project.appspot.com',
  messagingSenderId: '799964882820',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
