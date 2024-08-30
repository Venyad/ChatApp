import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-1e770.firebaseapp.com",
  projectId: "reactchatapp-1e770",
  storageBucket: "reactchatapp-1e770.appspot.com",
  messagingSenderId: "53165621505",
  appId: "1:53165621505:web:0ae5a079e23989d8f01b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()