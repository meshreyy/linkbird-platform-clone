// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Paste your Firebase config here
const firebaseConfig = {
 apiKey: "AIzaSyCIoSyJ1dWBIJvtOnvAOWDA1XIjWMkWLKM",
  authDomain: "linkbird-clone.firebaseapp.com",
  projectId: "linkbird-clone",
  storageBucket: "linkbird-clone.firebasestorage.app",
  messagingSenderId: "453005155178",
  appId: "1:453005155178:web:b4ba8f4eaf1eeca7526313",
  measurementId: "G-0KM3Y17167"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };
