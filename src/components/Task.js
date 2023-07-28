import { useState } from 'react'
import "./Task.css"
import editIcon from "../images/icon-edit.svg"
import saveIcon from "../images/icon-save.svg"

export default function Task({task, onEdit}){
  const [editing, setEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(task.taskText);

  const imgSrc = editing ? saveIcon : editIcon;
  let taskContent;
  
  if(editing){
    taskContent = (
         <input type="text" onChange={(e)=> setNewTaskText(e.target.value)} value={newTaskText}/>
    );
  }
  else{
    taskContent = task.taskText
  }
  
  return (
    <div className="flex-group taskText-EditBtn">
      <div className={`taskText ${task.isComplete && "strike-through"}`}>
        {taskContent}
      </div>
      <button className='editBtn' onClick={()=> {
                              (editing && onEdit(task.id, newTaskText))
                              setEditing(!editing);
                            }
      }>
        <img src={imgSrc} alt="Edit/Save"/>
      </button>
    </div>
  )
}