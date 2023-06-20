import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "solo-dios.firebaseapp.com",
    projectId: "solo-dios",
    storageBucket: "solo-dios.appspot.com",
    messagingSenderId: "148017153302",
    appId: "1:148017153302:web:256c5d31bdf2f232a0bc37"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);