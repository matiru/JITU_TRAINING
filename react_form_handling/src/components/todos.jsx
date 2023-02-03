import React ,{useState}from "react";
import Todo from "./todo"



const Todos = ({todos}) => {



  








    return(

        <div className="todos">
          {console.log(todos)}
          {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>




    )
}

export default Todos