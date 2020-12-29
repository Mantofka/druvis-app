import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCsy68kmLxISxE3IQq7_9mg_euMNc1B0wE',
  authDomain: 'druvis-app.firebaseapp.com',
  databaseURL: 'https://druvis-app.firebaseio.com',
  projectId: 'druvis-app',
  storageBucket: 'druvis-app.appspot.com',
  messagingSenderId: '915599194468',
  appId: '1:915599194468:web:6d8a9c97fa1f0f09cfe271',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const auth = firebase.auth();

export { storage, auth, firebase as default };
