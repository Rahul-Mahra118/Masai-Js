import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAhaKyYXxcdddtHYfRnBRRURyeQpETidwM",
  authDomain: "movies-4b857.firebaseapp.com",
  databaseURL:
    "https://movies-4b857-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "movies-4b857",
  storageBucket: "movies-4b857.firebasestorage.app",
  messagingSenderId: "1009137122430",
  appId: "1:1009137122430:web:2d77a9e09f6d84c024ac2f",
  measurementId: "G-TGL4PQVQX2",
  database:
    "https://movies-4b857-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
//create firebase context
const FirebaseContext = createContext();

//provider
export const FirebaseProvider = ({ children }) => {
  //function to add data to firebase

  const addData =async (collectionPath, data) => {
    // refrence create kro db se , collectionpath yani collection ka name
    //push will create a unique id under same collections.
    const newRef = push(ref(db, collectionPath));
    await set(newRef, data);
  };
  return (
    <FirebaseContext.Provider value={{addData}}>
      {children}
    </FirebaseContext.Provider>
  );
};

//consumer
export const useFirebase = () => useContext(FirebaseContext);
