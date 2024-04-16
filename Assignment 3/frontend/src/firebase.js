// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "elite-estate-1c77e.firebaseapp.com",
  projectId: "elite-estate-1c77e",
  storageBucket: "elite-estate-1c77e.appspot.com",
  messagingSenderId: "87929769910",
  appId: "1:87929769910:web:a0d4c9ce9f209eb627fb17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);