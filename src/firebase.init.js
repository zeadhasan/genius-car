// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZuS0RV2rOmRbdzGCyhAkPRFW-D0Z_XRE",
  authDomain: "genius-car-6c395.firebaseapp.com",
  projectId: "genius-car-6c395",
  storageBucket: "genius-car-6c395.appspot.com",
  messagingSenderId: "450010881356",
  appId: "1:450010881356:web:ed1fb31a297034ab8203e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;