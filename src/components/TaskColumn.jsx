import React from 'react'
// import Todo from "../assets/target.jpeg"
import "./TaskColumn.css"
import TaskCard from './TaskCard'

const TaskColumn = ({title, icon, tasks, status}) => {
    
  return (
    <section className='task_coloumn'>
        <h2 className='task_column_heading'>
            <img className='task_column_icon' src={icon } alt="To do icon " />{title}
        </h2>
        {tasks.map(
          (task,index) => 
            task.status === status && 
            <TaskCard
            key={index} 
            title={task.task} 
            tags={task.tags}/>
        )}
    
    </section>
  )
}

export default TaskColumn
