// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClUNooa-0BWu_Oz94AnAgu-eebPErE-y0",
  authDomain: "fir-data-base-f61e7.firebaseapp.com",
  projectId: "fir-data-base-f61e7",
  storageBucket: "fir-data-base-f61e7.firebasestorage.app",
  messagingSenderId: "479105792615",
  appId: "1:479105792615:web:3f618dd91a59b71d60b2c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}