import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK1gvuNHG4i0SlwJaRrF1IHWPjHgm25BI",
    authDomain: "employee-manager-3264b.firebaseapp.com",
    projectId: "employee-manager-3264b",
    storageBucket: "employee-manager-3264b.appspot.com",
    messagingSenderId: "627612167481",
    appId: "1:627612167481:web:ce87118b754149c1d4cce8",
    measurementId: "G-9QXM6LW5XW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp