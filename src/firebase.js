import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAezmQrHRVrFDFntMV1d2MgRudBMayEgS8",
  authDomain: "dh-netflix-clone.firebaseapp.com",
  projectId: "dh-netflix-clone",
  storageBucket: "dh-netflix-clone.appspot.com",
  messagingSenderId: "341663992206",
  appId: "1:341663992206:web:52778ca9b04e6ae7323cdf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
