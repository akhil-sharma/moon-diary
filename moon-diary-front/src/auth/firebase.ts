// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjIJxafIVk9tyN6yRbHlJpGpQc568sFyU",
  authDomain: "moon-diary-4528c.firebaseapp.com",
  projectId: "moon-diary-4528c",
  storageBucket: "moon-diary-4528c.appspot.com",
  messagingSenderId: "231868763145",
  appId: "1:231868763145:web:45c8609a1256ef6683fcd8",
  measurementId: "G-RBLRMYFLPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {auth}