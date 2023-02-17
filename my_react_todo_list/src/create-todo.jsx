import React,{useContext,useState} from 'react'
import './todo_list.css';
import { TodosContext } from './todo_list';

const CreateTodo =()=>{


    
    const [data ,setData]= useContext(TodosContext);
    const{todos} = data;




    const [title, setTitle] = useState('');
    const [date_due, setDate_due] = useState('');


    const handleInputChange = (e) => {
        setTitle(e.target.value);
        console.log(title);
        };
      
        const handleDateChange = (e) => {
          setDate_due(e.target.value);
          console.log(date_due);
          };
      
          // handle submit and set new todo to  the local storage



      
          const handleSubmit = (e) => {
            e.preventDefault();
            console.log('submitted');

            const newTodo = {
              id: todos.length + 1,
              title: title,
              date_due: date_due,
              completed: false,
          };
          
          const TodoArray = [];

          
          
          if(title.trim() === '' || date_due.trim() === ''){
            setData({...data})
            }else{
                setData ({...data,todos:[...todos]}) 
                TodoArray.push(newTodo);
                console.log(TodoArray,"hhadaasda");
                localStorage.setItem('todos', JSON.stringify(TodoArray));
                setDate_due('');
                setTitle('');
            }
          

          };
      
        
     
      

    return(

        // <TodosContext.Provider value={todos}>
        <form className="todo_form">
        <input className='addtodo' value={title} type="text" placeholder="add to do"onChange={handleInputChange} required></input>
        <small><label>Due date</label></small>
        <input className='adddate'  value ={date_due}type="date" onChange={handleDateChange} required ></input>
        <button type='submit' className='addtodoBtn'
         onClick={handleSubmit}
         > add to do</button>
      </form>
       // {/* </TodosContext.Provider> */}

    )
    
}

export default CreateTodo