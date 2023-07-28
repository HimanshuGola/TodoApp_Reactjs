import Task from "./Task.js"
import "./TaskRow.css"
import crossIcon from "../images/icon-cross.svg"

export default function TaskRow({task, onDelete, onEdit, onComplete}){
  return (
    <li className="flex-group designed-row taskContainer taskFont">
      <input type="checkbox" checked={task.isComplete} onChange={(e)=>{onComplete(task.id)}}/>
      <Task task={task} onEdit={onEdit}/>
      <button className="delBtn" onClick={()=> onDelete(task.id)}>
        <img src={crossIcon} alt=""/>
      </button>
    </li>
  )
}