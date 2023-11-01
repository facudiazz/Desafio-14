import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyC4-SlyaMuldwSl6WcDjibvbM1EnFPHUbk",
  
    authDomain: "desafio-14.firebaseapp.com",
  
    projectId: "desafio-14",
  
    storageBucket: "desafio-14.appspot.com",
  
    messagingSenderId: "258535810218",
  
    appId: "1:258535810218:web:d70eee9e3eb9483d25dcd3"
  
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
