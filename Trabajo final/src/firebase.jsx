import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getFirestore,  collection, getDocs, getDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
import { getAuth} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"


const firebaseConfig = {
    apiKey: "AIzaSyBApJ-jRf1BXycB_Mte_OfKHHu4yTAjjU8",
    authDomain: "advanced-web-class-pj.firebaseapp.com",
    projectId: "advanced-web-class-pj",
    storageBucket: "advanced-web-class-pj.appspot.com",
    messagingSenderId: "104350597147",
    appId: "1:104350597147:web:63a2426268a866133a38be",
    measurementId: "G-7S6SS4WK5G"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export async function handleGetProductsFromDB() {
    const querySnapshot = await getDocs(collection(db, "products"));
    const mappedArray = [];
    querySnapshot.forEach((doc) => {
        mappedArray.push(doc.data());
    });

 return mappedArray;
}
