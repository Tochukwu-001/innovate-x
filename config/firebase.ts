// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp8krYLnTck_HKWmxVbhypl3YHpFFlcTI",
  authDomain: "innovate-x-a6f6f.firebaseapp.com",
  projectId: "innovate-x-a6f6f",
  storageBucket: "innovate-x-a6f6f.firebasestorage.app",
  messagingSenderId: "762231400005",
  appId: "1:762231400005:web:3b631809c2722d1742652c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
