import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcjaux3KSaOQ8p7hoVL5eerrYlHH1Ay2o",
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
