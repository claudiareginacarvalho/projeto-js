import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1lpxf1YihghJugKaMWEP0i_y5bFJEljI",
  authDomain: "projeto-3e5f0.firebaseapp.com",
  projectId: "projeto-3e5f0",
  storageBucket: "projeto-3e5f0.firebasestorage.app",
  messagingSenderId: "329998476292",
  appId: "1:329998476292:web:2c99a42527a1f0b180c151"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;