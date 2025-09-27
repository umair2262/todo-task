import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import target from './assets/target.jpeg'
import checkmark from  './assets/checkmark.png'
import risingstar from './assets/risingstar.png'
const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
        <TaskColumn title="To do" icon={ target}
        />
        <TaskColumn title="Doing " icon={ risingstar}
      />
        <TaskColumn title="Done" icon ={ checkmark}
        />
        
      </main>
    </div>
  )
}

export default App
