// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4rPoV4R7NflCaQGIGsa_yi3xbcDSJvck",
  authDomain: "team7-adaec.firebaseapp.com",
  projectId: "team7-adaec",
  storageBucket: "team7-adaec.firebasestorage.app",
  messagingSenderId: "102519493043",
  appId: "1:102519493043:web:d8f9df8263b7131bfcbbc6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
