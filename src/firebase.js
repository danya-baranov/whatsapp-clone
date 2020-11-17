import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyAoIGqoZehtYhfypeIWpiBKRZvGPAtUMfQ",
  authDomain: "whats-app-clone-2060c.firebaseapp.com",
  databaseURL: "https://whats-app-clone-2060c.firebaseio.com",
  projectId: "whats-app-clone-2060c",
  storageBucket: "whats-app-clone-2060c.appspot.com",
  messagingSenderId: "837420624163",
  appId: "1:837420624163:web:0f4400fa0654bbebd70496",
  measurementId: "G-2BQG6GW9PQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db