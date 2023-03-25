// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqQAkgsjKLgRMIy84e0Zkv9fWmZjO_qEE",
  authDomain: "monster-db-65129.firebaseapp.com",
  projectId: "monster-db-65129",
  storageBucket: "monster-db-65129.appspot.com",
  messagingSenderId: "702597883453",
  appId: "1:702597883453:web:6e5b11ad6717c5bd616c54"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);