import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE1-01VBrgr0K8034VzBSgyG1KaFOYj3o",
  authDomain: "portfolio-projects-fc45b.firebaseapp.com",
  projectId: "portfolio-projects-fc45b",
  storageBucket: "portfolio-projects-fc45b.appspot.com",
  messagingSenderId: "725299587125",
  appId: "1:725299587125:web:91bd8ae93b3a4461b7e97c",
  measurementId: "G-PZR5FQV9Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
