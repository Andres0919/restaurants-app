import { firebaseApp } from "./firebase";
import * as firebase from "firebase";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export const isUserLogged = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      let isLogged = user !== null ? true : false;
      console.log("isLogged :>> ", isLogged);
      resolve(isLogged);
    });
  });
};
