import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Task = () => {
    const task= useSelector(state=>state.task.task)
    const dispatch= useDispatch()

  return (
    <div>
        
    </div>
  )
}

export default Task