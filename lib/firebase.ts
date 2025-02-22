"use client";

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs4dCib1arNNMRprx141lnvx22k7QVJwg",
  authDomain: "tradeauth-b5e2e.firebaseapp.com",
  projectId: "tradeauth-b5e2e",
  storageBucket: "tradeauth-b5e2e.firebasestorage.app",
  messagingSenderId: "995388905989",
  appId: "1:995388905989:web:81fbf78bff1f41d4511a6c",
  measurementId: "G-414E3P3FGF"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth }; 