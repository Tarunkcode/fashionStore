import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

export { onAuthStateChanged };
export { createUserWithEmailAndPassword };
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
export const firestore = getFirestore();

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        createdAt,
        email,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
export default firebase;
