// firebase.js
// Modular import syntax (v9+)
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCqn4ka5C_GiPI-CY8aiWNTPXzVFcrr6D4",
  authDomain: "myshop-app-d5a54.firebaseapp.com",
  projectId: "myshop-app-d5a54",
  storageBucket: "myshop-app-d5a54.firebasestorage.app",
  messagingSenderId: "297951594734",
  appId: "1:297951594734:web:846dd5b3da1b60f4910bff"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db;








