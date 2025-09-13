import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS8EJ-ekLkWl8H6zyop5FByT1HAP8wOdw",
  authDomain: "deaw-reactparedes.firebaseapp.com",
  projectId: "deaw-reactparedes",
  storageBucket: "deaw-reactparedes.firebasestorage.app",
  messagingSenderId: "934380518678",
  appId: "1:934380518678:web:394aee8f15b79685b42437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);