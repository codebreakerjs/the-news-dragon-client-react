// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBImgXIujs-ajAyIIWrMiUkDT8SPvVxX40",
  authDomain: "the-news-dragon-cb5a4.firebaseapp.com",
  projectId: "the-news-dragon-cb5a4",
  storageBucket: "the-news-dragon-cb5a4.appspot.com",
  messagingSenderId: "793587970859",
  appId: "1:793587970859:web:a28bcf7ccd389fa8018b6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;