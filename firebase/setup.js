import React from 'react'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCyEuzOCwnDFBG-Y1BDclGuNuZbrSmEtS0",
    authDomain: "burger-queen-18cfe.firebaseapp.com",
    databaseURL: "https://burger-queen-18cfe.firebaseio.com",
    projectId: "burger-queen-18cfe",
    storageBucket: "burger-queen-18cfe.appspot.com",
    messagingSenderId: "163185589899",
    appId: "1:163185589899:web:6c58aa230926d5105b5e8e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
