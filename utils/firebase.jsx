import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDJsTni-4xMbU1-uQ64lrp8JPr_ivXkEDc",
    authDomain: "adrian-6af3e.firebaseapp.com",
    projectId: "adrian-6af3e",
    storageBucket: "adrian-6af3e.appspot.com",
    messagingSenderId: "370666430800",
    appId: "1:370666430800:web:9bc02a2506493840464c55"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);