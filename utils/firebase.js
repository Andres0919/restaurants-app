import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0AYCaA3yX9w8I_hKnaPIJTeIfHd-98_k",
  authDomain: "restaurants-app-7d70f.firebaseapp.com",
  projectId: "restaurants-app-7d70f",
  storageBucket: "restaurants-app-7d70f.appspot.com",
  messagingSenderId: "738169536026",
  appId: "1:738169536026:web:c8b4adb87bbc9f577bdba3",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
