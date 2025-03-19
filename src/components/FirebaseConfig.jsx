// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmioWUfrnutAknrGtCCGtanOJbwvCzW50",
  authDomain: "verify-a0e3b.firebaseapp.com",
  projectId: "verify-a0e3b",
  storageBucket: "verify-a0e3b.firebasestorage.app",
  messagingSenderId: "376835938966",
  appId: "1:376835938966:web:6782a7378085658e8a00b7",
  measurementId: "G-EZVY6ZZ5QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
