import { useAppDisPatch, useAppSelector } from "../../hooks/hooks"
import { addOrUpdateTask, deleteTask } from "./taskSlice"

const ShowTask = () => {
    const tasks= useAppSelector(state=>state.tasks)
    const taskList= Object.entries(tasks).map(([id,task])=>({id , ...task}))
    const dispatch = useAppDisPatch()
  return (
   <>
   { 
    taskList&& taskList.map((task,i)=>(
        <ul key={task.id}>
            <li>{i+1}</li>
            <li>{task.description}</li>
            <li>{task.completed?'True':'False'}</li>
            <li>{task.priority}</li>
            <button onClick={()=>dispatch(addOrUpdateTask(task))}>Edit</button>
            <button onClick={()=>dispatch(deleteTask.bind(this,task.id))}>Delete</button>
        </ul>
    ))
   }

   </>
  )
}

export default ShowTask