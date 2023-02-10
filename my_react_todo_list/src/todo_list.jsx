import './todo_list.css';
import React, { useState,useContext,createContext } from 'react';
import Todo from './todo';
import { Create } from '@mui/icons-material';
import CreateTodo from './create-todo';



 const TodosContext = createContext([]);

function TodoList() {












  

  const [todos, setTodos] = useState(
     [  
                 {id : 1, title : "go to church",date_due:"18/02/2023", completed : false},
                 {id : 2, title : "go to hospital",date_due:"8/02/2023",completed : false},  
                 {id : 3, title : "visit national park",date_due:"8/02/2023", completed : false},
                 {id : 4, title : "eat njahi",date_due:"8/02/2023", completed : false},
                 {id : 5, title : "find an alien",date_due:"8/02/2023", completed : false},]);



  return (
    <div className="todos">
      <h1>My Todos</h1>
      <TodosContext.Provider value={todos}>
 
      <CreateTodo/>
      <Todo />   
      </TodosContext.Provider>
 
    </div>
  );
}

export {TodosContext}
export default TodoList;
