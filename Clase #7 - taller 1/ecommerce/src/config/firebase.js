// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9ppjj_2q38q3rESUnaYW_79q0jFIQUVw",
  authDomain: "eccomerce-6fad3.firebaseapp.com",
  projectId: "eccomerce-6fad3",
  storageBucket: "eccomerce-6fad3.appspot.com",
  messagingSenderId: "798819372863",
  appId: "1:798819372863:web:5d832d0b6593afd549cd8a",
  measurementId: "G-M6NMDWCYF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)