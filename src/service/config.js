import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDul6ZOd7BNOhCpqiyT3_foKBiK60Z8u40",
    authDomain: "solo-dios.firebaseapp.com",
    projectId: "solo-dios",
    storageBucket: "solo-dios.appspot.com",
    messagingSenderId: "148017153302",
    appId: "1:148017153302:web:256c5d31bdf2f232a0bc37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);