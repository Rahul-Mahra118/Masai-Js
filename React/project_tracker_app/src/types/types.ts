import type { User } from "firebase/auth"

export interface credType
{
    email:string,
    password:string
    
}

export interface AuthContextType{
    signUpUser:(creds:credType)=>Promise<void>,
    signInUser:(creds:credType)=>Promise<void>,
    logOut:()=>Promise<void>,
    isUser:User|null
}

export interface DatabaseType{
    
}