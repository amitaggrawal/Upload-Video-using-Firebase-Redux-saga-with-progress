import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }