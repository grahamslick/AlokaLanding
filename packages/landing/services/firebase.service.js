import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBkSwE8TY5ZOqvuIbycFPfmUg2ET3FXFqg',
  authDomain: 'alokalanding.firebaseapp.com',
  databaseURL: 'https://alokalanding.firebaseio.com',
  projectId: 'alokalanding',
  storageBucket: 'alokalanding.appspot.com',
  messagingSenderId: '639517232201',
  appId: '1:639517232201:web:469ed12037fc4c94b7c398',
  measurementId: 'G-5SRM3XVRVY',
};

let fbApp = null;
if (!firebase.apps.length) {
  fbApp = firebase.initializeApp(config);
}

export const fsdb = firebase.firestore();

export default fbApp;
