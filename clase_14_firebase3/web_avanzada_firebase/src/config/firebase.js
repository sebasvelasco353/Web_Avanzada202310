import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7SzLRvfAKNkzvKrFQqZ6jwxExhRNeeWQ",
  authDomain: "web-avanzada-24977.firebaseapp.com",
  projectId: "web-avanzada-24977",
  storageBucket: "web-avanzada-24977.appspot.com",
  messagingSenderId: "276915523087",
  appId: "1:276915523087:web:479f6c18a60e736ee31d7a",
  measurementId: "G-Z9PHQ1W9VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);