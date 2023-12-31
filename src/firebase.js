// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkF8A6heNqKnyMfdZnQE1fx_jpRmdcfGw",
  authDomain: "hello-storage-7a1ac.firebaseapp.com",
  projectId: "hello-storage-7a1ac",
  storageBucket: "hello-storage-7a1ac.appspot.com",
  messagingSenderId: "159419115558",
  appId: "1:159419115558:web:71f0d53b64bb260437dee7",
  measurementId: "G-VKE5R2PSW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getStorage } from "firebase/storage";
const storage = getStorage(app);

export { storage }
