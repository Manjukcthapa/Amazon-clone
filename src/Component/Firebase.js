import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSURmF_4bVrSrOE-pCs3mAatiYfFaaMeY",
  authDomain: "clone-ec10b.firebaseapp.com",
  databaseURL: "https://clone-ec10b.firebaseio.com",
  projectId: "clone-ec10b",
  storageBucket: "clone-ec10b.appspot.com",
  messagingSenderId: "1031188834133",
  appId: "1:1031188834133:web:cfa54a7b2f582f4ffc31dc",
  measurementId: "G-NGK9QLMJR6",
});


const auth = firebase.auth();

export { auth };
