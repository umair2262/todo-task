import React from 'react'
import "./TaskForm.css"

const TaskForm = () => {
  return (
    <header className='app_header'>
      <form >
        <input type="text" className="task_input" placeholder='Enter your task' />

        <div className='task_form_bottom_line'>
          <div>
          <button className='tag'>HTML</button>
          <button className='tag'>CSS</button>
          <button className='tag'>JAVASCRIPT</button>
          <button className='tag'>REACT</button>
          </div>
          <div>
          <select className="task_status" >
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button type="submit" className='task_submit'>+ Add Task </button>
          </div>
        </div>
      </form>
    </header>
  )
}

export default TaskForm
