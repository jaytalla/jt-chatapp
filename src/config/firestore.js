// import firebase from "firebase/app";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn5DKS5C71JtqpPdoqJic0myhsfnbMG8Y",
  authDomain: "chat-app-68dd9.firebaseapp.com",
  projectId: "chat-app-68dd9",
  storageBucket: "chat-app-68dd9.appspot.com",
  messagingSenderId: "413694711496",
  appId: "1:413694711496:web:e950e8f10d13a47488f7fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
