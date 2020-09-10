import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBI-VqSe1Sbv4R8KuypchyecSWrrqejk6k",
  authDomain: "clone-c4f60.firebaseapp.com",
  databaseURL: "https://clone-c4f60.firebaseio.com",
  projectId: "clone-c4f60",
  storageBucket: "clone-c4f60.appspot.com",
  messagingSenderId: "38400768454",
  appId: "1:38400768454:web:49786d9d1f550364509ac7",
  measurementId: "G-WZRP614K53"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };