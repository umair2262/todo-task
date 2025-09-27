import React from 'react'
import Todo from "../assets/target.jpeg"
import "./TaskColumn.css"

const TaskColumn = ({title, icon}) => {
    
  return (
    <section className='task_coloumn'>
        <h2 className='task_column_heading'>
            <img className='task_column_icon' src={icon } alt="To do icon " />{title}
        </h2>
    
    </section>
  )
}

export default TaskColumn
