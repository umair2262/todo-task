import React from 'react'
import "./TaskForm.css"
import Tag from './Tag'
import { useState } from "react"

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("todo");
  const handleTaskchange = e => {
    setTask(e.target.value);
  };
  const handleStatuschange = e => {
    setStatus(e.target.value);
  };
  console.log(task,status)
  return (
    <header className='app_header'>
      <form >
        <input type="text" className="task_input" placeholder='Enter your task'
        onChange={handleTaskchange}  />

        <div className='task_form_bottom_line'>
          <div>
          <Tag tagName="HTML"/>
          <Tag tagName="CSS"/>
          <Tag tagName="JAVASCRIPT"/>
          <Tag tagName="REACT"/>
          
          </div>
          <div>
          <select className="task_status" onChange={handleStatuschange}>
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
