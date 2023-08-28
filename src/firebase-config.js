// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUGlY-rpQbx1wSWVfPeCVKGGzzcNBLn5Y",
  authDomain: "chatapp-14b14.firebaseapp.com",
  projectId: "chatapp-14b14",
  storageBucket: "chatapp-14b14.appspot.com",
  messagingSenderId: "656528348098",
  appId: "1:656528348098:web:dd298eb8966909a07f7c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);