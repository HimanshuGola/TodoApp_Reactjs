import { useState } from 'react'
import "./AddTask.css"

export default function AddTask({onAddTask}){
  const [inputText, setInputText] = useState("")
  
  return (
    <form className="addTaskForm flex-group designed-row">
      
      <button className='addBtn' onClick={(e)=>{
              e.preventDefault();
              onAddTask(inputText);
              setInputText("");
              }}>
        +
      </button>
      
      <input type="text" onChange={(e)=>{
        setInputText(e.target.value)
      }} value={inputText} placeholder="Create a new Task..."/>
      
    </form>
  )
}