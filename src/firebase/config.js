// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS_pvQpe8EZqR4RxkJ9eKJQKzVYhtUTOc",
  authDomain: "proyectofinal-coderhouse-ec4dc.firebaseapp.com",
  projectId: "proyectofinal-coderhouse-ec4dc",
  storageBucket: "proyectofinal-coderhouse-ec4dc.appspot.com",
  messagingSenderId: "1040151742605",
  appId: "1:1040151742605:web:2ad7e506cf3f91c6043ac4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)