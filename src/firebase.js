import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNdc90DToAJ9VJkCFRQYJ4ImXsrnr8tac",
  authDomain: "netflix-clone-958f8.firebaseapp.com",
  projectId: "netflix-clone-958f8",
  storageBucket: "netflix-clone-958f8.appspot.com",
  messagingSenderId: "85394082001",
  appId: "1:85394082001:web:71050d0c6cb665a29d5df0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
