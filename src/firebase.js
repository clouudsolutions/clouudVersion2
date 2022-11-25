// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq3U_wwvncBmlwBkpxrn5IUhtMLT88WpA",
  authDomain: "clouud-solutions.firebaseapp.com",
  databaseURL: "https://clouud-solutions-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clouud-solutions",
  storageBucket: "clouud-solutions.appspot.com",
  messagingSenderId: "480867835665",
  appId: "1:480867835665:web:e6468ab50c126a3a96f6b0",
  measurementId: "G-Q9LPW9D57R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);