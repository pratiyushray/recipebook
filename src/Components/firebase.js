// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx7MBL8pxVm-LtZQCTlAuo8-Bfc_5ylgI",
  authDomain: "recipebook-ddee1.firebaseapp.com",
  projectId: "recipebook-ddee1",
  storageBucket: "recipebook-ddee1.appspot.com",
  messagingSenderId: "498911088604",
  appId: "1:498911088604:web:f8da8de4714aa56b568919",
  measurementId: "G-99GKMR6825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};