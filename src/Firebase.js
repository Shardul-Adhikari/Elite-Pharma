// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCwMD62G3icwMy4PIudznUurUvWScCd8Qw",
  authDomain: "ffyp-3811a.firebaseapp.com",
  projectId: "ffyp-3811a",
  storageBucket: "ffyp-3811a.appspot.com",
  messagingSenderId: "255905139324",
  appId: "1:255905139324:web:92e3ef27e284dd162ed7f9",
  measurementId: "G-8EMDJPM0GV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
