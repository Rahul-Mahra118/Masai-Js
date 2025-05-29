// import { createContext, useContext, useState,useEffect } from "react";
// import React from "react";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   onAuthStateChanged,
// //   signOut,
// //   type User,
// // } from "firebase/auth";

// import { auth } from "../../firebase-config";


// export const AuthContextProvider = ({
//   children,
// }: {
//   children: React.ReactElement;
// }) => {


//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (user) => {
//   //     if (user) {
//   //       setIsUser(user);
//   //     } else {
//   //       setIsUser(null);
//   //     }
//   //   });
//   //   return unsubscribe;
//   // }, []);

//   // const logOut = async () => {
//   //   await signOut(auth);
//   // };
//   return (
//     <AuthContext.Provider value={{  logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
