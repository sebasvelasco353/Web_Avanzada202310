// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Z1E8UKVyfDaTgYJ0G0IMyuvLixYtgqM",
  authDomain: "eccomerce2-5086b.firebaseapp.com",
  projectId: "eccomerce2-5086b",
  storageBucket: "eccomerce2-5086b.appspot.com",
  messagingSenderId: "191877263468",
  appId: "1:191877263468:web:3d7c04a74afbaefcfe6849",
  measurementId: "G-HVBBRBJ85Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);