import React from 'react'
import Todo from "../assets/target.jpeg"
import "./TaskColumn.css"

const TaskColumn = (props) => {
    
  return (
    <section className='task_coloumn'>
        <h2 className='task_column_heading'>
            <img className='task_column_icon' src={props.icon } alt="To do icon " />{props.title}
        </h2>
    
    </section>
  )
}

export default TaskColumn
