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
const newProjectsContainer = document.querySelector(".newProjectsContainer");




/* Single Project */

btnAddProject.addEventListener("click", () =>{   
    overlayDiv.classList.remove("hidden");
    formNewProject.classList.remove("hidden");
})

cancelBtn.addEventListener("click", () => {
    overlayDiv.classList.add("hidden");
    formNewProject.classList.add("hidden");
})


createProjectBtn.addEventListener("click", ()=> {
    overlayDiv.classList.add("hidden");
    formNewProject.classList.add("hidden"); 

    const newProject = document.createElement("div");
    newProject.classList.add("newProject");
    newProject.innerHTML = `
    <h2>${projectInput.value}</h2>
    <button class="removeBtn">Remove</button>
  `;

    const removeBtn = newProject.querySelector(".removeBtn");
      removeBtn.addEventListener("click", () => {
          newProject.remove();  // ← изтрива точно този елемент
      });



    newProjectsContainer.appendChild(newProject);
    projectInput.value = "";

})








/* Single Todo  */
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


/*
function createTodo({ title, description, date, priority }) {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  todo.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <input type="date" value="${date}">
  `;

  const todoPriority = document.createElement("select");
  ["Low", "Medium", "High"].forEach(level => {
    const option = document.createElement("option");
    option.value = level;
    option.textContent = level;
    if (level === priority) option.selected = true;
    todoPriority.appendChild(option);
  });

  todo.appendChild(todoPriority);
  return todo;
}

const todoData = {
  title: titleInput.value,
  description: descriptionInput.value,
  date: dateInput.value,
  priority: priorityInput.value
}

todosContainer.appendChild(createTodo(todoData));
todosContainer.appendChild(createTodo({
      title: "Shopping",
      description: "My shopping list: ****",
      date: "2021-03-22",
      priority: "High"
}));

*/