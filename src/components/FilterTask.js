import "./FilterTask.css"

export default function FilterTask({filter, onFilter}){
  return(
    <form className="filterForm flex-group designed-row">
      <label for="all">
        <input type="radio" id="all" name="filterCondition" value={null} checked={filter === null} onClick={()=> onFilter(null)}/>
        <span>All</span>
      </label>
      <label for="completed">
        <input type="radio" id="completed" name="filterCondition" value={true} checked={filter === true} onClick={()=> onFilter(true)}/>
        <span>Completed</span>
      </label>
      <label for="pending">
        <input type="radio" id="pending" name="filterCondition" value={false} checked={filter === false} onClick={()=> onFilter(false)}/>
        <span>Pending</span>
      </label>
    </form>
  )
}