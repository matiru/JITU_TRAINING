
import React,{useContext} from 'react'
import './todo_list.css';
import { TodosContext } from './todo_list';

function  Todo() {

    const[data, setData] = useContext(TodosContext);
    const {todos} = data;

    







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