import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCNTkpU6A0UZWEHjVilGCPIPZJj391kF0o',
  authDomain: 'emall-db.firebaseapp.com',
  databaseURL: 'https://emall-db.firebaseio.com',
  projectId: 'emall-db',
  storageBucket: 'emall-db.appspot.com',
  messagingSenderId: '166910299301',
  appId: '1:166910299301:web:a3ad1a92d27bce8cab514c',
  measurementId: 'G-YR69PEHKMD'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
