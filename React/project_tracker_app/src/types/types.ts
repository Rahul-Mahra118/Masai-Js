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

export interface formType extends credType{
    fullName:string
}

export interface UserDetails{
    uid:string,
    email:string,
    fullName:string
    isSignUp?:boolean
}

export interface ProjectDetails{
    title:string,
    description:string,
}
