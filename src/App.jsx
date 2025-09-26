import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
        <section className='task_coloumn'>Section1</section>
        <section className='task_coloumn'>Section2</section>
        <section className='task_coloumn'>Section3</section>
      </main>
    </div>
  )
}

export default App
