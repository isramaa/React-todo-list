import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className='todoItem'>
        {children}
        <div className='ActionContainer'>
            
            <div className="editIcon" role="button" tabIndex="0" onClick={() => {handleEditTodo(index)}}>
                <i className="fa-solid fa-pen-to-square"></i>
            </div>
            
            
            <div className="deleteIcon" role="button" tabIndex="0" onClick={() => handleDeleteTodo(index)}>
                <i className="fa-regular fa-trash-can"></i>
            </div>
        </div>
    </li>
  )
}
