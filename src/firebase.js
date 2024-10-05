// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAaZqZDolAqvT_PRAUGPRzi13gC5OySGEw",
    authDomain: "clone-1a732.firebaseapp.com",
    projectId: "clone-1a732",
    storageBucket: "clone-1a732.appspot.com",
    messagingSenderId: "727248279587",
    appId: "1:727248279587:web:25e7b7e0c305108218b996",
    measurementId: "G-WK8M92LRZ7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
