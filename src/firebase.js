// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD29KeLrDIf03iPeZUgVUda5VWa1w7rXlo",
  authDomain: "ezone-challenge.firebaseapp.com",
  projectId: "ezone-challenge",
  storageBucket: "ezone-challenge.appspot.com",
  messagingSenderId: "577787408048",
  appId: "1:577787408048:web:f028043de7a1836ccd1575",
  measurementId: "G-95R8406CCE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };