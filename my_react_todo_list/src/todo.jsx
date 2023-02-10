
import React,{useContext} from 'react'
import './todo_list.css';
import { TodosContext } from './todo_list';

function  Todo() {

    const todos = useContext(TodosContext);
    // console.log(todos);


  return (
    <div>
           <ul>
        {todos.map((todo) => (
          <li key={todos.indexOf(todo)}><p>{todo.title}</p> 
          <small>Due on<h4>{todo.date_due}</h4></small>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default  Todo