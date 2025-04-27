import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCXMI4W8d4OgKJfX-YtCQMVRrgcsccSKPQ",
  authDomain: "fir-project-f2900.firebaseapp.com",
  projectId: "fir-project-f2900",
  storageBucket: "fir-project-f2900.firebasestorage.app",
  messagingSenderId: "1086054720404",
  appId: "1:1086054720404:web:ef56937f7d3ed74e3de581",
  measurementId: "G-6VBHENP15E"
};

const app = initializeApp(firebaseConfig);
export const db= getDatabase(app);