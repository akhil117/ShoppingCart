import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2z5Sil5IbFD2RrvhIS36f0fVfbnbtSJk",
    authDomain: "shoppingcart-db.firebaseapp.com",
    databaseURL: "https://shoppingcart-db.firebaseio.com",
    projectId: "shoppingcart-db",
    storageBucket: "shoppingcart-db.appspot.com",
    messagingSenderId: "600520466068",
    appId: "1:600520466068:web:cf514da01f1307e11e1e81",
    measurementId: "G-QXCBXXSQRK"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
