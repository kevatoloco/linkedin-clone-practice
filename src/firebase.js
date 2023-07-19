import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNM3fgRIjMlCEU6v0OJwSOOFQTTaxop3M",
    authDomain: "linkedin-clone-practice-7ad4c.firebaseapp.com",
    projectId: "linkedin-clone-practice-7ad4c",
    storageBucket: "linkedin-clone-practice-7ad4c.appspot.com",
    messagingSenderId: "703119958653",
    appId: "1:703119958653:web:7bad18c23319bf2ddf8714"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };