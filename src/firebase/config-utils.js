import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDnaj0ktztWwTIKoFPvjSKnoBq5WDRSuIg",
  authDomain: "chat-react-79c07.firebaseapp.com",
  databaseURL: "https://chat-react-79c07.firebaseio.com",
  projectId: "chat-react-79c07",
  storageBucket: "chat-react-79c07.appspot.com",
  messagingSenderId: "338083062753",
  appId: "1:338083062753:web:bd9f494a4072250690e8a0",
  measurementId: "G-SNHKSNKC4L"
};
//Para evitar que se ejecute dos veces el método initializeApp
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.auth();