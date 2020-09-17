import React, { useState } from 'react';
import TodoList from "./Todolist";
const App = () => {
	
	const [inputList,setinputList]= useState();
	const [item,setitem]= useState([]);
	
	const ItemEvent = (e) => {
		//console.log(e.target.value);
		setinputList(e.target.value);
	}
	
	const handelSubmit = () => {
		setitem((oldItem) =>{
			return[...oldItem,inputList];
		})
		setinputList("");
	}
	
	const deleteItems = (id) =>{

        setitem((oldItem) =>{
        	return oldItem.filter((arrvalue,index) => {
        		return index !== id;
        		// return arrvalue.length >= 4;
        	});
        });
    };
	
  return( 
		<div>
			<div className="main_div">
				<div className="center_div">
					<br />
					<h1> To Do List</h1>
					<br />
					<input type="test" placeholder="Add a item"
					 value={inputList}
					 onChange={ItemEvent}/>
					<button onClick={handelSubmit}> + </button>
				
						{/* <li>{input}</li> */}
						{item.map((itemVal,index) =>{
							return <TodoList
							key = {index}
							text = {itemVal}
							id = {index}
							onSelect ={deleteItems}
							/>
						})}
				</div>
			</div>
		</div>
		)
};

 
export default App;