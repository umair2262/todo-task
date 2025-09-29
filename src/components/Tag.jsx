import React from 'react'
import "./Tag.css";

const Tag = ({tagName,selectTag}) => {
   
  return (
    
      <button type='button' className='tag' onClick={() => selectTag(tagName)}>{tagName} </button>
      // <button className='tag'>{props.tagName}</button>
    
  )
}

export default Tag
