import React, { useEffect, useRef, useState } from 'react'

const Pet = () => {
  const[mood,setMood]= useState('happy');
  let ref= useRef();
  

  useEffect(()=>{
   ref.current= setTimeout(()=>{
            
      setMood('bored')
    },2000)

    return ()=>{
      clearTimeout(ref.current)
     console.log('timer id cleared with ', ref.current)
    }
  },[mood]);

  return (
    <>
    <div id="pet">
        <h3 style={{fontSize:'90px', margin:'auto 90px'}}>
          🐶
          <span>Mood:{mood}</span>

        </h3>
    </div>
    </>
  )
}

export default Pet