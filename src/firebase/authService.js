import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { auth } from "../firebase/firebase";

// Register
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logoutUser = () => {
  return signOut(auth);
};

// Google Sign-In
export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};


