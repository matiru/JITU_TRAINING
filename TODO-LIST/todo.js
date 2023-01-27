let todoInput = document.querySelector('.todoInput');
 let timeInput = document.querySelector('.timeInput');
let submitBtn = document.querySelector('.submitBtn');
let todoList = document.querySelector('.todoList');
submitBtn.addEventListener('click', addTodo);

function addTodo(e) {
    e.preventDefault();
    // dont add empty todos
    if (todoInput.value === '' || timeInput.value === '') {
        return alert('Please enter a todo and time');
     }
   let todo = {};
    todo.todo = todoInput.value;
    todo.time = timeInput.value;
    todo.id = Date.now();
    todo.completed = false;
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    timeInput.value = '';
    displayTodos();
}

function displayTodos() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        let div = document.createElement('div');
        div.classList.add('todoContainer');
        div.innerHTML = `
        <div class="todo">
            <div class="todoText">
                <p>${todo.todo}</p>
            </div>
            <div class="todoTime">
                <p>${todo.time}</p>
            </div>

            <div class="todoBtns">
                <button class="completeBtn" onclick="complete(${todo.id})">Complete</button>
                <button class="deleteBtn" onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        </div>
        `;
        todoList.appendChild(div);
    });
}

function complete(id) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let todo = todos.find((todo) => todo.id === id);
    todo.completed = true;
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
}

function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
    displayTodos();
}

displayTodos();

