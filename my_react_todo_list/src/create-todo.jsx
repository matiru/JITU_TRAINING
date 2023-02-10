import React,{useContext,useState} from 'react'
import './todo_list.css';
import { TodosContext } from './todo_list';

const CreateTodo =()=>{


    const [data ,setData] = useContext(TodosContext);
    const [todos, setTodos] = useState(data);
    console.log("my todos",todos);

    console.log("my todos",todos);
    const[newTodo, setNewTodo] = useState({});


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
      
      
          const handleSubmit = (e) => {
            e.preventDefault();
            console.log('submitted');
            setNewTodo({
              id: todos.length + 1,
              title: title,
              date_due: date_due,
              completed: false,
          });
        //   setTodos([...todos, newTodo]);
          };
        
      
     
      

    return(

        <TodosContext.Provider value={todos}>
        <form className="todo_form">
        <input className='addtodo' type="text"placeholder="add to do"onChange={handleInputChange}></input>
        <small><label>Due date</label></small>
        <input className='adddate' type="date" onChange={handleDateChange} ></input>
        <button className='addtodoBtn'
         onClick={handleSubmit}
         > add to do</button>
      </form>
        </TodosContext.Provider>

    )
    
}

export default CreateTodo