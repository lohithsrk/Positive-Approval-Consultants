// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbyRigpe-CzcRtc_w78C8BeXpd8CSV3KI",
  authDomain: "positive-approal-consultants.firebaseapp.com",
  projectId: "positive-approal-consultants",
  storageBucket: "positive-approal-consultants.appspot.com",
  messagingSenderId: "1050885863263",
  appId: "1:1050885863263:web:587f156cd9cbd64a38a8ea",
  measurementId: "G-K022TQBGJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);