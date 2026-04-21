import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsVOafqWQqgTkQe-FJk7fh3BCHRmFcVGM",
  authDomain: "kurtz-mill-munitions.firebaseapp.com",
  projectId: "kurtz-mill-munitions",
  storageBucket: "kurtz-mill-munitions.firebasestorage.app",
  messagingSenderId: "786251117576",
  appId: "1:786251117576:web:97c2290941ba235c9b4dbd",
  measurementId: "G-G8FQ6N4CL8"
};

// Initialize Firebase (Singleton pattern for Next.js SSR compatibility)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
