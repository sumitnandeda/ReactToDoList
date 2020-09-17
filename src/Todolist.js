import React from 'react';
const TodoList = (props) => {
	
  return( 
		<div>
            <div className="todo_style">
                <li><i className="deleteButton" onClick={() =>{
                    props.onSelect(props.id)
                    }}>Delete</i>{props.text}</li>
            </div>
		</div>
		)
};

 
export default TodoList;