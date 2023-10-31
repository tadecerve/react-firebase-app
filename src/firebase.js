// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxa1hBJV8aI_lQO4qXW9KmNoquD1JtsYA",
  authDomain: "react-firebase-ingsoft.firebaseapp.com",
  projectId: "react-firebase-ingsoft",
  storageBucket: "react-firebase-ingsoft.appspot.com",
  messagingSenderId: "1039647074254",
  appId: "1:1039647074254:web:1b0bb12e5b0a3c1356ad9f",
  measurementId: "G-WQ35PTG8RM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app); //representa la  base de datos de firestore



