import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB9Nz2efftyzzqC_UUvLxvYuyePTRV4TBQ",
  authDomain: "serve-share.firebaseapp.com",
  projectId: "serve-share",
  storageBucket: "serve-share.appspot.com",
  messagingSenderId: "1085076209086",
  appId: "1:1085076209086:web:e8f0da6100c23ed5a90def",
  measurementId: "G-SVC9YB58J8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(app);
