// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBT_njwgbAwNPkHdqsYa2BGb8ycWqPbhI",
  authDomain: "ecocleanbd-9c909.firebaseapp.com",
  projectId: "ecocleanbd-9c909",
  storageBucket: "ecocleanbd-9c909.firebasestorage.app",
  messagingSenderId: "613044713626",
  appId: "1:613044713626:web:cb2f0d99f0d439d9970723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);