import firebase from  "firebase/app"
const firebaseConfig= {
    apiKey: "AIzaSyBeJlbIifZDJoeXvxmM56GgeoDuj4e7rOk",
    authDomain: "miapp-1b63f.firebaseapp.com",
    projectId: "miapp-1b63f",
    storageBucket: "miapp-1b63f.appspot.com",
    messagingSenderId: "1009059814",
    appId: "1:1009059814:web:d39771429386687c5a3827"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig);