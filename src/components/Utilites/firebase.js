// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBD297CmqwOroV78LeeprhZtbasPhNuBM4",
    authDomain: "todays-blog-dc4e2.firebaseapp.com",
    projectId: "todays-blog-dc4e2",
    storageBucket: "todays-blog-dc4e2.appspot.com",
    messagingSenderId: "858722165543",
    appId: "1:858722165543:web:e19be190adec484b3c3f02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth