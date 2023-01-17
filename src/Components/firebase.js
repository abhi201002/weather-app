// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJU9yc0Ase-p9hiOtpzRviu3BQ-UV16V0",
  authDomain: "weather-app-cdb2f.firebaseapp.com",
  projectId: "weather-app-cdb2f",
  storageBucket: "weather-app-cdb2f.appspot.com",
  messagingSenderId: "397198923412",
  appId: "1:397198923412:web:bd80c7ce7d6e1d93dfc681",
  measurementId: "G-2S7SB4VNXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);