// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc9QiIqqW5-BSTnTwwUWZRTDHhs73DymI",
  authDomain: "primer-proyecto-f3021.firebaseapp.com",
  projectId: "primer-proyecto-f3021",
  storageBucket: "primer-proyecto-f3021.appspot.com",
  messagingSenderId: "703589861924",
  appId: "1:703589861924:web:c30cc752bdfa5a8ffba6b1",
  measurementId: "G-09NDV60PCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app