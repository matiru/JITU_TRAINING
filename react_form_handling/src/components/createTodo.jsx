import React, { useState } from "react";





const CreateTodo = ({todos,setTodos})=> {

    const [title,setTitle] = useState("")
    const [due_date,setDue_Date] = useState("")


    const handleInputChange =(e)=>{
        console.log(e.target.value)
        setTitle(e.target.value)

    }
    const handleDateChange =(e)=>{
        console.log(e.target.value)
        setDue_Date(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("submitted")

    let newTodo = {
            id: 12,
            title: title,
            due_date: due_date,
            completed: false,
        }
        setTodos([...todos, newTodo]);
       

    }


 











    return(
        <form className="todo_form" onSubmit={handleSubmit}>
        <input className='addtodo'
        value={title}
         type="text"placeholder="add to do"
   onChange={handleInputChange} ></input>

        <small><label>Due date</label></small>
        <input className='adddate'
        value={due_date}
         type="date" 
     onChange={handleDateChange}></input>


        <button className='addtodoBtn'
     onClick={handleSubmit} > add to do</button>
      </form> 
     

    )
}

export default CreateTodo