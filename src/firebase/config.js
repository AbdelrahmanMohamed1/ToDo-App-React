// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBicXXDetk1-bYpRQqReDeSDSFKysjEt8w",
  authDomain: "reactauth-22912.firebaseapp.com",
  projectId: "reactauth-22912",
  storageBucket: "reactauth-22912.appspot.com",
  messagingSenderId: "353506279521",
  appId: "1:353506279521:web:9303ace716c76a8821ea20"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
