import './todo_list.css';
import React, { useState } from 'react';


function TodoList() {
  const [todos, setTodos] = useState([  
                 {id : 1, title : "go to church",date_due:"18/02/2023", completed : false},
                 {id : 2, title : "go to hospital",date_due:"8/02/2023",completed : false},  
                 {id : 3, title : "visit national park",date_due:"8/02/2023", completed : false},
                 {id : 4, title : "eat njahi",date_due:"8/02/2023", completed : false},
                 {id : 5, title : "find an alien",date_due:"8/02/2023", completed : false},]);



  return (
    <div className="todos">
      <h1>My Todos</h1>

      <form className="todo_form">
        <input className='addtodo' type="text"placeholder="add to do"></input>
        <small><label>Due date</label></small>
        <input className='adddate' type="date"></input>
        <button className='addtodoBtn'> add to do</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}><p>{todo.title}</p> <small><h4>{todo.date_due}</h4></small></li>
        ))}
      </ul>

 
    </div>
  );
}

export default TodoList;
