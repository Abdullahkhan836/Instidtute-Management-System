


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCZpr4asJPnYW4HCBHmnfMvmsjBwb-tpiw",
    authDomain: "trim-airfoil-358219.firebaseapp.com",
    projectId: "trim-airfoil-358219",
    storageBucket: "trim-airfoil-358219.appspot.com",
    messagingSenderId: "599330698321",
    appId: "1:599330698321:web:279deede794d8be5ff3470",
    measurementId: "G-5SDWNGB8NB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app