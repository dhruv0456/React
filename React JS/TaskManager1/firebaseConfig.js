// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChAVDFtVad6FN12W21wATRSviK_WpLjHU",
  authDomain: "taskmanager1-25cd2.firebaseapp.com",
  projectId: "taskmanager1-25cd2",
  storageBucket: "taskmanager1-25cd2.firebasestorage.app",
  messagingSenderId: "999843998088",
  appId: "1:999843998088:web:3ca755ba6a14c6ee74f23d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}