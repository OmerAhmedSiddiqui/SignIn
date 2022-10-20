// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getAuth,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmHulznNeHIi4QTIUWNvmA7CJl4Nu_q68",
    authDomain: "test2-25cf7.firebaseapp.com",
    projectId: "test2-25cf7",
    storageBucket: "test2-25cf7.appspot.com",
    messagingSenderId: "877972847836",
    appId: "1:877972847836:web:5d4b59334251746a2a0819",
    measurementId: "G-8FF57ZBJ8F"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in,
      console.log(" User is signed in,");
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      console.log(" User is signed out,");

      // ...
    }
  });



