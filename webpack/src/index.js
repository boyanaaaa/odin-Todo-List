import { greeting } from "./greeting.js";
import "./styles.css";


console.log(greeting);

const Todo = document.querySelector(".Todo");
const todosContainer = document.querySelector(".showTodosContainer");
const btnAddProject = document.querySelector(".btnAddProject");
const cancelBtn = document.querySelector(".cancelBtn");
const createProjectBtn = document.querySelector(".createProjectBtn");
const overlayDiv = document.querySelector(".overlay");
const formNewProject = document.querySelector(".formNewProject");





/* Single Project */

btnAddProject.addEventListener("click", () =>{   
    overlayDiv.classList.remove("hidden");
    formNewProject.classList.remove("hidden");
})

cancelBtn.addEventListener("click", () => {
    overlayDiv.classList.add("hidden");
    formNewProject.classList.add("hidden");
})









/* Single Todo */
const todo = document.createElement("div");
todo.classList.add("todo");
todosContainer.appendChild(todo);

const todoTitle = document.createElement("h2");
todoTitle.textContent = "Go shopping";
todo.appendChild(todoTitle);

const todoDesription = document.createElement("p");
todoDesription.textContent = "Shopping List: ****";
todo.appendChild(todoDesription);

const todoDate = document.createElement("input");
todoDate.setAttribute("id", "todoDate");
todoDate.setAttribute("type", "date");
todo.appendChild(todoDate);

const todoPriority = document.createElement("select");
todoPriority.id = "todoPriority";
["Low", "Medium", "High"].forEach(level => {
  const option = document.createElement("option");
  option.value = level;
  option.textContent = level;
  todoPriority.appendChild(option);
});
todo.appendChild(todoPriority);



