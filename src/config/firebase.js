// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaIOY7PvJrqGEx__hZrtZkiPIuLCPJ2_Q",
  authDomain: "mangaecommer.firebaseapp.com",
  projectId: "mangaecommer",
  storageBucket: "mangaecommer.appspot.com",
  messagingSenderId: "154535501037",
  appId: "1:154535501037:web:1a984e43781079c21680e4",
  measurementId: "G-F92KK1YW55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
const analytics = getAnalytics(app);