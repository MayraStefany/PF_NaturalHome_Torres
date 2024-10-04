import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMIOzfVBF5mXl3FzqlhFdXqX33R4pARWo",
  authDomain: "natural-home-torres.firebaseapp.com",
  projectId: "natural-home-torres",
  storageBucket: "natural-home-torres.appspot.com",
  messagingSenderId: "723178947818",
  appId: "1:723178947818:web:0b2106464438e6c9b18393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)