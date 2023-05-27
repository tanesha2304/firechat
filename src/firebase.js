import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyALepsBHSuyscFzxOhvA64cQm6VS-d0UMc",
    authDomain: "firechat-681de.firebaseapp.com",
    projectId: "firechat-681de",
    storageBucket: "firechat-681de.appspot.com",
    messagingSenderId: "799021026181",
    appId: "1:799021026181:web:160efafc3f26a11e8a12ec",
    measurementId: "G-7ZW72GSK6B"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }