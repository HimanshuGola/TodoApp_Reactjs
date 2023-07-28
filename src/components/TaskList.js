import TaskRow from "./TaskRow";
import "./TaskList.css"
export default function TaskList({tasks, taskType, onDeleteTask, onEditTask, onCompletedTask}){
  let showTaskList = ((taskType === true || taskType === false) ? tasks.filter(t => t.isComplete === taskType) : tasks);
  return (
    <ul className="taskList">
      {
        showTaskList.map(task => <TaskRow 
                            key={task.id}
                            task={task}
                            onDelete={onDeleteTask}
                            onEdit={onEditTask}
                            onComplete={onCompletedTask}/>)
      }
    </ul>
  )
}
