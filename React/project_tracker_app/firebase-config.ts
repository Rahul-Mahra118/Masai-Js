// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8X-dQTviMmNvmwWUvCH-h0Se9L7NKZzw",
  authDomain: "projecttaskmanager-7a66f.firebaseapp.com",
  projectId: "projecttaskmanager-7a66f",
  storageBucket: "projecttaskmanager-7a66f.firebasestorage.app",
  messagingSenderId: "260179438738",
  appId: "1:260179438738:web:011fa8c86dd53e0e104a4b",
  measurementId: "G-DDQV36WPCC",
  databaseUrl:
    "https://projecttaskmanager-7a66f-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
