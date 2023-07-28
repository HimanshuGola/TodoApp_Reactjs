export default function ClearCompletedTask({onClearCompleted}){
  return (
    <button onClick={()=> onClearCompleted()}>Clear Completed</button>
  )
}