import React from 'react'
import "./TaskForm.css"
import Tag from './Tag'
import { useState } from "react"

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task : "",
    status : "todo",
    tags : [],
  });
  const selectTag = (tag) =>{
    if (taskData.tags.some(item => item ===tag)) {
      const filterTags = taskData.tags.filter(item => item !== tag)
      setTaskData(prev =>{
        return {...prev, tags:filterTags}
      })
    } else{
      setTaskData(prev => {
        return {... prev,tags:[... prev.tags,tag]}
      })
    }
  }
  console.log(taskData.tags)
  const handleChange = (e) => {

    const {name, value} = e.target;
    setTaskData((prev) => {
      return {...prev, [name]:value}
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  }
  
  
  return (
    <header className='app_header'>
      <form  onSubmit={handleSubmit}>
        <input type="text" name='task' className="task_input" placeholder='Enter your task' 
        onChange={handleChange}  />

        <div className='task_form_bottom_line'>
          <div>
          <Tag tagName="HTML" selectTag={selectTag}/>
          <Tag tagName="CSS" selectTag={selectTag}/>
          <Tag tagName="JAVASCRIPT" selectTag={selectTag}/>
          <Tag tagName="REACT" selectTag={selectTag}/>
          
          </div>
          <div>
          <select className="task_status" name='status ' onChange={handleChange}>
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
