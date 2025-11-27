
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
const mainTitle = document.querySelector(".mainTitle");

const btnAddTodo = document.querySelector(".btnAddTodo");
const formNewTodo = document.querySelector(".formNewTodo");
const cancelBtnTodo = document.querySelector(".cancelBtnTodo");
const createTodoBtn = document.querySelector(".createTodoBtn");
const todoInput = document.querySelector(".todoInput");
const todoDescription = document.querySelector(".todoDescription");
const todoDueDate = document.querySelector(".todoDueDate");
const todoPriority = document.querySelector("#todoPriority");


let projects = {};          
let currentProject = null; 


/* Single Project */

btnAddProject.addEventListener("click", () =>{   
    overlayDiv.classList.remove("hidden");
    formNewProject.classList.remove("hidden");
})

cancelBtn.addEventListener("click", () => {
    overlayDiv.classList.add("hidden");
    formNewProject.classList.add("hidden");
})


function generateProjectId() {
  const randomPart = Math.random().toString(36).substring(2, 7); 
  return "proj" + randomPart; 
}


createProjectBtn.addEventListener("click", ()=> {
    overlayDiv.classList.add("hidden");
    formNewProject.classList.add("hidden"); 
  
    const projId = generateProjectId();
    projects[projId] = []; 

    const newProject = document.createElement("div");
    newProject.classList.add("newProject", projId);
    newProject.dataset.id = projId;

    const projectName = projectInput.value;

    newProject.innerHTML = `
    <h2>${projectName}</h2>
    <button class="removeBtn">Remove</button>`;




    newProjectsContainer.appendChild(newProject);
    projectInput.value = "";
    


     newProject.addEventListener("click", (e) => {
        currentProject = e.currentTarget.dataset.id;  ;
        currentProjectName.innerText = "Project: " + newProject.querySelector("h2").innerText;;
        renderTodos();
        btnAddTodo.classList.remove("hidden");
        });


        newProject.querySelector(".removeBtn").addEventListener("click", (e) => {
            e.stopPropagation(); // важно: да не се активира click на project

            const removedId = newProject.dataset.id;

            delete projects[removedId];
            newProject.remove();

            if (currentProject === removedId) {
                currentProject = null;
                currentProjectName.innerText = ""; 
                btnAddTodo.classList.add("hidden");
                todosContainer.innerHTML = ""; 
            }
        });


    });


const currentProjectName = document.createElement("p");
currentProjectName.classList.add("currentProjectName");
currentProjectName.innerText = "Project";
mainTitle.appendChild(currentProjectName);










/* Create New Todo Button*/

btnAddTodo.addEventListener("click", () =>{
  overlayDiv.classList.remove("hidden");
  formNewTodo.classList.remove("hidden");

});







/* Render Todo Date */
function renderTodos() {
  if (!currentProject || !projects[currentProject]) return;
    todosContainer.innerHTML = "";

    projects[currentProject].forEach(todo => {
        todosContainer.appendChild(createTodo(todo));
    });
}





/* Form Create New Todo */

cancelBtnTodo.addEventListener("click", () => {
  overlayDiv.classList.add("hidden");
  formNewTodo.classList.add("hidden");
});

createTodoBtn.addEventListener("click", ()=> {



   if (!currentProject) {
       alert("Select a project first!");
       return;
   }


   const todoData = {
    title: todoInput.value,
    description: todoDescription.value,
    date: todoDueDate.value,
    priority: todoPriority.value
    };


    projects[currentProject].push(todoData); 
    renderTodos();

    todoInput.value = "";
    todoDescription.value = "";
    todoDueDate.value = "";
    todoPriority.value = "low";

    overlayDiv.classList.add("hidden");
    formNewTodo.classList.add("hidden");
})
 


function createTodo({ title, description, date, priority }) {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  todo.innerHTML = `
    <h2>${title}</h2>
    <p class="descTodo">${description}</p>
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




