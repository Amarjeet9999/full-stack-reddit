import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBbKht4UbSX6v2rWzZW4Qr5Z9t9x8rKJA0",
    authDomain: "image-ced57.firebaseapp.com",
    projectId: "image-ced57",
    storageBucket: "image-ced57.appspot.com",
    messagingSenderId: "776501518884",
    appId: "1:776501518884:web:3a4b84afdbd092b6b8aeb1",
    measurementId: "G-1D6LKTNQ0K"
};

firebase.initializeApp( firebaseConfig );
const storage = firebase.storage();
export { storage };