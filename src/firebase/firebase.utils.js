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

/*
 * createUserProfileDocument
 *
 * Check if the user is in the firestore DB. If there is no documents
 * creates one.
 * Return the userRef data.
 *
 * @param: userAuth, object
 * @param: additionnal data, object
 * @return: userRef, object
 */

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return '';
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;