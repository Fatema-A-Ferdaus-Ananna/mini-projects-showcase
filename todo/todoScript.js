const container = document.querySelector(".container");
const todo_form = document.querySelector(".todo-form");
const input_todo = document.querySelector("#input-todo");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todo_list = document.querySelector("#list");


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
}

//add todo
const addTodo = (event) =>{
    event.preventDefault();
    const todoValue = input_todo.value;

    const todo_id = Date.now().toString();
    console.log(todo_id);

    createTodo(todo_id, todoValue);
}

//listener
todo_form.addEventListener("submit", addTodo);

