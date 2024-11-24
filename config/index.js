// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM6WQpIiRWjfJ--hJ-fK4sgcGZzfLbFeg",
  authDomain: "myapp-acd07.firebaseapp.com",
  databaseURL: "https://myapp-acd07-default-rtdb.firebaseio.com",
  projectId: "myapp-acd07",
  storageBucket: "myapp-acd07.firebasestorage.app",
  messagingSenderId: "29499079437",
  appId: "1:29499079437:web:dec6f1c76d14b27b730e44",
  measurementId: "G-3P9ZT5M5RC",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase;
