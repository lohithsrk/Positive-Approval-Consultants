// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDc23VVhm_Z7BFL_5Of-dJyALinCeH47g",
  authDomain: "positive-approvals.firebaseapp.com",
  projectId: "positive-approvals",
  storageBucket: "positive-approvals.firebasestorage.app",
  messagingSenderId: "328911245640",
  appId: "1:328911245640:web:69e5c937ffbcd3b242e37d",
  measurementId: "G-BXQESD4WZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);