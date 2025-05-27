import { createContext, useContext, useState } from "react";
import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  type User,
} from "firebase/auth";

import { auth } from "../../firebase-config";
// import { getDatabase, ref, set, push } from "firebase/database";
import type { AuthContextType, credType } from "../types/types";

//create context
const AuthContext = createContext<AuthContextType | null>(null);

//provide context

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  //   const addDataToFirebase = async (collectionPath, data) => {
  //     // refrence create kro db se , collectionpath yani collection ka name
  //     //push will create a unique id under same collections.
  //     const newRef = push(ref(db, collectionPath));
  //     await set(newRef, data);
  //   };

  const [isUser, setIsUser] = useState<User | null>(null);

  const signUpUser = async ({ email, password }: credType) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = async ({ email, password }: credType) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(user);
    } else {
      setIsUser(null);
    }
  });

  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <AuthContext.Provider value={{ signUpUser, signInUser, isUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

//consume the context

export const useAuth = () => useContext(AuthContext);
