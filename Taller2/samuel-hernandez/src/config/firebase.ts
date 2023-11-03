import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7lgm7DUGhY6W1VZflIwKR2W-vgNsMZFE",
    authDomain: "hotshop-436f4.firebaseapp.com",
    projectId: "hotshop-436f4",
    storageBucket: "hotshop-436f4.appspot.com",
    messagingSenderId: "810350834639",
    appId: "1:810350834639:web:7497f9a318f17e324398ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Firebase related methods

export const normalizeFirebaseErrorMessage = (firebaseError : string) : string => {
    switch (firebaseError) {
        case "Firebase: Error (auth/invalid-email).":
            return "Please type in a valid email.";
        case "Firebase: Error (auth/missing-password).":
            return "Please type in a valid password.";
        case "Firebase: Error (auth/user-not-found).":
            return "User not found.";
        case "Firebase: Error (auth/wrong-password).":
            return "Wrong password."
        case "Firebase: Error (auth/email-already-in-use).":
            return "Email already in use. Please try another."
        default:
            return firebaseError;
    }
}

// ...