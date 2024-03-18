import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.REACT_APP_APP_KEY;
const AUTH_DOMAIN = import.meta.env.REACT_APP_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.REACT_APP_PROJECT_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "product-management-ca714.firebaseapp.com",
  projectId: "product-management-ca714",
  storageBucket: "product-management-ca714.appspot.com",
  messagingSenderId: "864847640512",
  appId: "1:864847640512:web:18a03d03068074b349fa25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//database
const db = getFirestore(app);

export { app, db };
