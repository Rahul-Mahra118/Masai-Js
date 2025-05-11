import { createContext, useContext } from "react";
import { useState } from "react";
const CharacterContext= createContext()

export const CharacterContextProvider=({children})=>{
      const[characters, setCharacters]= useState([])

    return <CharacterContext.Provider value={{characters,setCharacters}}>
        {children}
    </CharacterContext.Provider>
}

export const useCharacters= ()=>useContext(CharacterContext)