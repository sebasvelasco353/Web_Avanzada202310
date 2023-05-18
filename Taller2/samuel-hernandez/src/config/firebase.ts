import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxMZrFwRi0AhfH_xlfkXB8pDBPPobq_uA",
    authDomain: "vallexplora.firebaseapp.com",
    projectId: "vallexplora",
    storageBucket: "vallexplora.appspot.com",
    messagingSenderId: "851468619929",
    appId: "1:851468619929:web:16d99921e7d1be2288e808"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Maybe move this function elsewhere
export const normalizeFirebaseErrorMessage = (firebaseError : string) : string => {
    switch (firebaseError) {
        case "Firebase: Error (auth/invalid-email).":
            return "Por favor ingrese un correo válido";
        case "Firebase: Error (auth/missing-password).":
            return "Por favor ingrese una contraseña";
        case "Firebase: Error (auth/user-not-found).":
            return "Correo o contraseña incorrectos";
        default:
            return "";
    }
}
