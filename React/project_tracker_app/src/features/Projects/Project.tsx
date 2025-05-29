import React, { useState } from 'react'
import { ProjectDetails } from '../../types/types'

const initialstate={
    title:'',
    description:''
}

const Project = () => {

    const {formState, setFormState}= useState<ProjectDetails>()
  return (
    <div>
          <form action="">
            <input type="text" placeholder='enter the title' value={}/>
            <input type="text" placeholder='enter the description' />
            <button onClick={()=>addTask()}>Add Task</button>
          </form>
    </div>
  )
}

export default Project