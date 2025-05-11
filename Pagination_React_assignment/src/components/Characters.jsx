import React, { useEffect } from 'react';
import axios from 'axios';
import { useCharacters } from '../Context/CharacterContext';
export const Characters = () => {
    const{Characters,setCharacters}= useCharacters()
  const fetchData= async()=>{
    let response= await axios('https://rickandmortyapi.com/api/character');
    let data= response.data.results;
    console.log(data)
    setCharacters(data)
  }
    useEffect(()=>{
          fetchData()
    },[])
  return (
    <div>
        {
            Characters&& Characters.map(character=>(
                <div>
                    
                    </div>
            ))

        }

    </div>
  )
}
