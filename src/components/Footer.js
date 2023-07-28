import ClearCompletedTask from "./ClearCompletedTask.js"
import FilterTask from "./FilterTask.js"
import "./Footer.css"

export default function Footer({count, filter, onFilterTask, onClearCompleted}){
  return(
      <div className="layout-container footerFont footer">
        <div className="itemsLeftDiv">{count} item{count>1 && "s"} left</div>
        <FilterTask filter={filter} onFilter={onFilterTask}/>
        <ClearCompletedTask onClearCompleted={onClearCompleted}/>
      </div>
  )
}