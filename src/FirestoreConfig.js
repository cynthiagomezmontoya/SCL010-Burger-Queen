import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCyEuzOCwnDFBG-Y1BDclGuNuZbrSmEtS0",
  authDomain: "burger-queen-18cfe.firebaseapp.com",
  projectId: "burger-queen-18cfe"
});

let db = firebase.firestore();
//db.settings({ timestampsInSnapshots });
//snapshopt Captura de informacion en tiempo real
export default db;

//hacer peticiones uy acceso a Firestore , trabaj con snapshots.
