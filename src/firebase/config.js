// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxSJMcfcZ6eybyJB4NlDS19G0rQWMVCsw",
  authDomain: "react-curso-20cec.firebaseapp.com",
  projectId: "react-curso-20cec",
  storageBucket: "react-curso-20cec.appspot.com",
  messagingSenderId: "696311047053",
  appId: "1:696311047053:web:39b528e210b597ea4fd3c4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)

export const getFirestore = getFirestore(FirebaseApp)