const container = document.querySelector(".container");
const todo_form = document.querySelector(".todo-form");
const input_todo = document.querySelector("#input-todo");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todo_list = document.querySelector("#list");
const message = document.querySelector("#message");


//create todo
const createTodo = (todo_id, todoValue) =>{
    const todoElement = document.createElement("li");
    todoElement.classList.add("li-style");
    todoElement.id = todo_id;
    todoElement.innerHTML = `<span>${todoValue}</span>
    <span><button class="delete-btn" id="deleteTodoBtn">
        <i class="fa-solid fa-xmark"></i>
    </span>` 

    todo_list.appendChild(todoElement);

    const deleteBtn = todoElement.querySelector("#deleteTodoBtn");
    deleteBtn.addEventListener('click', deleteTodo);
}

const deleteTodo =(event)=>{
    const selectTodo = event.target.parentElement.parentElement.parentElement;
    console.log(selectTodo);
    todo_list.removeChild(selectTodo);
    showMessage("Todd is Deleted Successfully!", "delete");

    // let todos = getTodosFromLocalStorage();
    // todos = todos.filter((todo)=>todo.selectTodo.id !== selectTodo.id);
    // localStorage.setItem("mytodos", JSON.stringify(todos));


    let todos = getTodosFromLocalStorage();
    todos = todos.filter((todo) => todo.todo_id !== selectTodo.id);
    localStorage.setItem("mytodos", JSON.stringify(todos));
};

//message 
const showMessage = (text, status) =>{
    message.classList.add(`todo-${status}`);
    message.textContent = text;
    setTimeout(()=>{
        message.textContent = "";
        message.classList.remove(`todo-${status}`);
    }, 2000);
}

const getTodosFromLocalStorage = () => {
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
};

//add todo
const addTodo = (event) =>{
    event.preventDefault();
    const todoValue = input_todo.value;

    const todo_id = Date.now().toString();
    console.log(todo_id);

    createTodo(todo_id, todoValue);
    showMessage("Todd is Added Successfully!", "add");

    //adding  too to local storage
    // const todos = gettodosFromLocalStorage();
    // todos.push({todo_id, todoValue});
    // localStorage.setItem("mytodo", JSON.stringify(todos));

    const todos = getTodosFromLocalStorage();
    todos.push({todo_id, todoValue});
    localStorage.setItem("mytodos", JSON.stringify(todos));

    console.log(todos);
    input_todo.value = "";
}

//load todos
const loadTodos = () =>{
    console.log(`loaded`);
    const todos = getTodosFromLocalStorage();
    todos.map((todo)=> createTodo(todo.todo_id, todo.todoValue));
};

//listener
todo_form.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);

