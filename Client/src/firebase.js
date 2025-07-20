// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCSX9ZlSgWWipEEAr7_T1PwXi09PUhctBQ",
  authDomain: "snackca-206.firebaseapp.com",
  projectId: "snackca-206",
  storageBucket: "snackca-206.firebasestorage.app",
  messagingSenderId: "361563889805",
  appId: "1:361563889805:web:e2e3c0fc18a211bbffc2c4",
  measurementId: "G-13WLYTRLC7"
};

// ✅ Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Initialize services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

// ✅ Export what you need
export { auth, provider, analytics };
