import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBNf1LQiI7fGS2LvrU9STcesSELTITHDDU",
  authDomain: "diary-dd0de.firebaseapp.com",
  projectId: "diary-dd0de",
  storageBucket: "diary-dd0de.appspot.com",
  messagingSenderId: "738333791948",
  appId: "1:738333791948:web:816182297d766902a75469",
};

//Init firebase
firebase.initializeApp(firebaseConfig);

//Init services
const proyectFirestore = firebase.firestore();
const projectAuth = firebase.auth()

export { proyectFirestore, projectAuth};
