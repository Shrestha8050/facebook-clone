// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA-AHsGVLm8HBWPnFMKPSQRxbO1n9oX9xw',
  authDomain: 'facebook-clone-27e76.firebaseapp.com',
  databaseURL: 'https://facebook-clone-27e76.firebaseio.com',
  projectId: 'facebook-clone-27e76',
  storageBucket: 'facebook-clone-27e76.appspot.com',
  messagingSenderId: '2963509470',
  appId: '1:2963509470:web:ed58523cbe6f1a90ac724f',
  measurementId: 'G-QR1SYH4QHK',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
