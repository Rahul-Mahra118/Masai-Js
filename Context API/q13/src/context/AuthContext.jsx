import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
//provider

const AuthContextProvider = ({children}) => {

    const [isloggedIn, setLoggedIn]= useState(false);
    return (
    <>
        <AuthContext.Provider value={{isloggedIn,setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    </>)
};

//consume the context 
const useAuth= ()=>useContext(AuthContext);

export {
  AuthContextProvider,useAuth
}
