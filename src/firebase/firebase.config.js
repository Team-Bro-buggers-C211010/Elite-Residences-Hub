// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATFxY71uaJ73qfhlITKJmUujtvAdtNK7o",
  authDomain: "elite-residences-hub.firebaseapp.com",
  projectId: "elite-residences-hub",
  storageBucket: "elite-residences-hub.appspot.com",
  messagingSenderId: "458776146281",
  appId: "1:458776146281:web:a9b59bc0cc6a3f4376cdf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
