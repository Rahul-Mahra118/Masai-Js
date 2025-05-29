import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import type { credType, UserDetails } from "../types/types";
// import { useEffect } from "react";
import { ref, set } from "firebase/database";
import { db } from "../../firebase-config";

export const signUpUser = async ({ email, password }: credType) => {
  try {
   const user= await createUserWithEmailAndPassword(auth, email, password);
   return user;

  } catch (error:any) {
    return error
  } finally {
    logOut();
  }
};

export const signInUser = async ({ email, password }: credType) => {
  await signInWithEmailAndPassword(auth, email, password);
};

// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       //   setIsUser(user);
//     } else {
//       //   setIsUser(null);
//     }
//   });
//   return unsubscribe;
// }, []);

export const logOut = async () => {
  await signOut(auth);
};

export const setUser = ({ email, fullName, uid }: UserDetails) => {
  set(ref(db, "users/" + uid), {
    fullName: fullName,
    email: email,
  });
};
