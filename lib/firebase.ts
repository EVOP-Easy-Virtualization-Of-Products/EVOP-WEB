import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCRuYVCVmDZwL2el6SbjgdPdYMU3Tsn4A",
  authDomain: "software-house-bio.firebaseapp.com",
  projectId: "software-house-bio",
  storageBucket: "software-house-bio.appspot.com",
  messagingSenderId: "368710429918",
  appId: "1:368710429918:web:0a755d3c07c117edc0664f",
  measurementId: "G-3PQEZ9PGBB"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const db = getFirestore(app);
export const auth = getAuth(app);
