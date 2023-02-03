import React from "react";





const Todo = ({todo}) => {

    return(
      
        <div className="todo">

<input type= "checkbox" name= "" id=""/>

        <span>{todo.title}</span>
        <small>{todo.date_due}</small>
        <small> <button>delete</button></small>


        </div>









    )

}

export default Todo