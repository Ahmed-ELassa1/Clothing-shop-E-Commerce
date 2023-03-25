// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLtWi3Mb-s7ukB_CFcMQ6MTGwEAEa13UQ",
  authDomain: "e-commerce-35b4b.firebaseapp.com",
  projectId: "e-commerce-35b4b",
  storageBucket: "e-commerce-35b4b.appspot.com",
  messagingSenderId: "940966820758",
  appId: "1:940966820758:web:79293fa8573356e3ba7bb7",
  measurementId: "G-KWWGFBRX5N",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
