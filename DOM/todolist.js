const todo_list = [
    { id: 1, title: 'Learn HTML', iscomplete:true },
    { id: 2, title: 'Learn JavaScript', iscomplete:false },
    { id: 3, title: 'Learn React', iscomplete:false },
];

//selecting elements by tag
//we get an array of all elemnts with the tag

let heading = document.getElementsByTagName("h4");
console.log(heading);

//selecting elements by id // we get only one element

let input_field = document.getElementById("todos-input");
console.log(input_field);


//selecting elements by class name
let todos = document.getElementsByClassName("todos")[0];
console.log(todos);

//creating html elements

for(let i=0; i<todo_list.length; i++){
    let todo = document.createElement("div");
    
    //creating a span for the title
    let todo_text = document.createElement("span");
    //assigning the title to the span
    todo_text.innerText = todo_list[i].title;

    //adding an input
    let todo_check = document.createElement("input");
    //setting the type of the input
    todo_check.setAttribute("type", "checkbox");
     

    // adding elemets to the dom
    todo.appendChild(todo_check);
   
    todo.appendChild(todo_text);

    //setting the class of the div
    todo.classList.add("todo");

    //adding a single todo to the todos div
    todos.appendChild(todo);
   
}
