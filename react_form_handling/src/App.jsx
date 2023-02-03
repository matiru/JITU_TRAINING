import './App.css'
import React ,{useState}from "react";
import CreateTodo from './components/createTodo'
import Todos from './components/todos'
import './todos.css'
function App() {

    
  const [todos, setTodos] = useState([  
    {id : 1, title : "go to church",date_due:"18/02/2023", completed : false},
    {id : 2, title : "go to hospital",date_due:"8/02/2023",completed : false},  
    {id : 3, title : "visit national park",date_due:"8/02/2023", completed : false},
    {id : 4, title : "eat njahi",date_due:"8/02/2023", completed : false},
    {id : 5, title : "find an alien",due_date:"8/02/2023", completed : false},]);



  return (
    <div className="container">
      <h1>Todo List</h1>
      <CreateTodo setTodos={setTodos}/>
      <Todos todos={todos}/>    
    </div>
  )
}

export default App
