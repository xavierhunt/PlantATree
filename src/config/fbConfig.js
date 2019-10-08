import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA3gcZOWHsrrtzJyqe-SMRjM3TT85cc3I4",
    authDomain: "plant-a-tree-2a111.firebaseapp.com",
    databaseURL: "https://plant-a-tree-2a111.firebaseio.com",
    projectId: "plant-a-tree-2a111",
    storageBucket: "plant-a-tree-2a111.appspot.com",
    messagingSenderId: "34811752063",
    appId: "1:34811752063:web:b37c3aa56403eb388c194a",
    measurementId: "G-ZRL0K2YZ86"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;