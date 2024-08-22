// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6337f.firebaseapp.com",
  projectId: "mern-auth-6337f",
  storageBucket: "mern-auth-6337f.appspot.com",
  messagingSenderId: "423821475807",
  appId: "1:423821475807:web:33466633724782ea5d4e6a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
