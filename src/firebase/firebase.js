import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA15kV1aiqKwbf55wxh46k0HHUSxKODQu4",
    authDomain: "jh-store.firebaseapp.com",
    databaseURL: "https://jh-store-default-rtdb.firebaseio.com",
    projectId: "jh-store",
    storageBucket: "jh-store.appspot.com",
    messagingSenderId: "552506023863",
    appId: "1:552506023863:web:ac497f2b158974ced35232",
    measurementId: "G-ZET7J76WVJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return firebaseApp;
}

export function getFirestore() {
    return firebase.firestore(firebaseApp);
}
