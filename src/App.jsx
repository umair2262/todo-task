import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import target from './assets/target.jpeg'
import checkmark from  './assets/checkmark.png'
import risingstar from './assets/risingstar.png'
import { useState } from "react"
const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex )
    setTasks(newTasks)
  }

  console.log("tasks", tasks);
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn title="To do" icon={target} tasks={tasks} status="todo" handleDelete={handleDelete}
        />
        <TaskColumn title="Doing " icon={ risingstar} tasks={tasks} status="doing" handleDelete={handleDelete}
      />
        <TaskColumn title="Done" icon ={ checkmark} tasks={tasks} status="done" handleDelete={handleDelete}
        />
        
      </main>
    </div>
  )
}

export default App
