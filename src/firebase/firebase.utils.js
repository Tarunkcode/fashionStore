import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyAFoSHPw82mcMZ2XsIoi2aYghpDdLPlP8k",
  // authDomain: "auth.natureguardianz.me",
  authDomain: "shopping-react-web.firebaseapp.com",
  projectId: "shopping-react-web",
  storageBucket: "shopping-react-web.appspot.com",
  messagingSenderId: "480144840615",
  appId: "1:480144840615:web:750b98336878650e200882",
  measurementId: "G-67YJYN10CD"
};

initializeApp(config);

export const auth = getAuth();
// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// Always wrap signInWithPopup inside a function in order for there working
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      console.log(token);
    })
    .catch((error) => {
      console.log(error);
    });

export default firebase;
