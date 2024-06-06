import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUJwesh41oQf0DzoCLJWpYV9ZBx7hzV4",
  authDomain: "react-native-bank-224e3.firebaseapp.com",
  projectId: "react-native-bank-224e3",
  storageBucket: "react-native-bank-224e3.appspot.com",
  messagingSenderId: "841541947383",
  appId: "1:841541947383:web:bb435b7d57330a432828f2",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
