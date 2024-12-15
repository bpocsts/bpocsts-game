// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsQPkut6UtQjFXjZPeGFIMhZ72s0mkM0o",
  authDomain: "bpocsts-a5c8b.firebaseapp.com",
  projectId: "bpocsts-a5c8b",
  storageBucket: "bpocsts-a5c8b.firebasestorage.app",
  messagingSenderId: "1058929799830",
  appId: "1:1058929799830:web:5f2f2a9bc7e11206ed48b7",
  measurementId: "G-LL55KS2W7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);