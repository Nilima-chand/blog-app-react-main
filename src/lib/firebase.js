// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
//import { apiKey } from "c:/Users/SUMIT/Desktop/blog-app-react-main/keys/keys";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRCOmj868ci7WucR-8KJFtl5s8Tc1aNWs",
  authDomain: "blogpost-f6980.firebaseapp.com",
  projectId: "blogpost-f6980",
  storageBucket: "blogpost-f6980.appspot.com",
  messagingSenderId: "1021045907074",
  appId: "1:1021045907074:web:683da35676127f0e615e9b",
  measurementId: "G-M3FV5D9N5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)