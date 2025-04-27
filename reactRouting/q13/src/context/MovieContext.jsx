import { createContext, useContext, useState } from "react";


const MovieContext= createContext();
//provider
export const MovieProvider=({children})=>{
        const[title, setTitle] = useState('');
        const [ description, setDescription]= useState('')
        const[movie, setMovie]= useState([])
        
    return(
        <MovieContext.Provider value={{title,setTitle,description,setDescription,movie, setMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

//consumer
export const useMovieContext= ()=>useContext(MovieContext)