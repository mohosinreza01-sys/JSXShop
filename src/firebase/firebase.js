// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZz8Hc58hyeyrpdfY9lcttzfr7ry3RiQU",
    authDomain: "techora-4d6ed.firebaseapp.com",
    projectId: "techora-4d6ed",
    storageBucket: "techora-4d6ed.firebasestorage.app",
    messagingSenderId: "135872984425",
    appId: "1:135872984425:web:bdc67eb43a14159d8f79f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

