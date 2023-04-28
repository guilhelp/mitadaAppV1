import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBwvGV_lJyGUgvLd-l6NttexNzOpXgdmvQ",
    authDomain: "mitadaapp.firebaseapp.com",
    projectId: "mitadaapp",
    storageBucket: "mitadaapp.appspot.com",
    messagingSenderId: "242262910747",
    appId: "1:242262910747:web:13de3c17748c9ce7b595be"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_BD = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

