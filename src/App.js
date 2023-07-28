import { useEffect, useState } from 'react'
import './App.css'
import Header from "./components/Header.js"
import AddTask from "./components/AddTask.js"
import TaskList from "./components/TaskList.js"
import Footer from "./components/Footer.js"
import bgDL from "./images/bg-desktop-light.jpg"
import bgDD from "./images/bg-desktop-dark.jpg"
import bgMD from "./images/bg-mobile-dark.jpg"
import bgML from "./images/bg-mobile-light.jpg"

let userDataFromLS = JSON.parse(localStorage.getItem("userData"));

if (userDataFromLS === null || userDataFromLS === undefined){
  userDataFromLS = {
    userTasks: [], 
    theme: false};
}

export default function App() {
  const [tasks, setTasks] = useState(userDataFromLS.userTasks);
  const [filterCond, setFilterCond] = useState(null);
  const [isLightTheme, setIsLightTheme] = useState(userDataFromLS.theme);
  
  const tasksLeftCount = tasks.filter(t=> !t.isComplete).length;
  const userData = {
    userTasks: tasks,
    theme: isLightTheme
  }
  const srcsetVal = isLightTheme ? bgDL : bgDD;
  const srcVal = isLightTheme ? bgML : bgMD;

  function editTaskIDs(filteredTasks){
    const copyTasks = filteredTasks;
    for(let i=0; i<filteredTasks.length; i++){
      copyTasks[i].id = i;
    }
    return copyTasks
  }

  function handleAddTask(taskText){
    let newID = tasks.length === 0 ? 0 : tasks[tasks.length-1].id +1;
    setTasks([
      ...tasks,
      {
        id: newID,
        taskText: taskText,
        isComplete: false
      }
    ])
  }

  function handleTaskDelete(id){
    let newTasks = tasks.filter(task => task.id !== id);
    setTasks(editTaskIDs(newTasks));
  }

  function handleEditTask(id, newText){
    setTasks([
      ...tasks.slice(0, id),
      {
        ...tasks[id],
        taskText: newText
      },
      ...tasks.slice(id+1)
    ])
  }

  function handleCompleted(id){
    setTasks([
      ...tasks.slice(0, id),
      {
        ...tasks[id],
        isComplete: !tasks[id].isComplete
      },
      ...tasks.slice(id+1)      
    ])
  }

  function handleFilterTask(cond){
    setFilterCond(cond);
  }

  function handleClearCompleted(){
    let newTasks = tasks.filter(task => !task.isComplete);
    setTasks(editTaskIDs(newTasks));
  }

  function handleThemeChange(){
    setIsLightTheme(!isLightTheme);
  }

  useEffect(()=>{
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [tasks, isLightTheme])
  
  return (
    <>
      <picture>
        <source srcset={srcsetVal} media="(min-width: 700px)"/>
        <img src={srcVal} alt="Background Image"/>
      </picture>
      
      <main className='flex-group main-app'>
        
        <div className='flex-group header-formContainer'>
          <Header lightTheme={isLightTheme} onThemeChange={handleThemeChange} />
          <AddTask onAddTask={handleAddTask} />
        </div>
        
        <TaskList taskType={filterCond} tasks={tasks} onDeleteTask={handleTaskDelete} onEditTask={handleEditTask} onCompletedTask={handleCompleted}/>
        
        <Footer count={tasksLeftCount} filter={filterCond} onFilterTask={handleFilterTask} onClearCompleted={handleClearCompleted}/>
        
      </main>
      
    </>
  )
}
