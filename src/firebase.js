// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc4tYt_6_6TMwA43DlrWfS_GWYXAIHJsA",
  authDomain: "react-fb-auth-f8395.firebaseapp.com",
  projectId: "react-fb-auth-f8395",
  storageBucket: "react-fb-auth-f8395.appspot.com",
  messagingSenderId: "598602805286",
  appId: "1:598602805286:web:49023deb261521c72876e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app); //representa la  base de datos de firestore



