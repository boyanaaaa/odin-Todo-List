import { greeting } from "./greeting.js";
import "./styles.css";
import odinImage from "./odin.png";

console.log(greeting);
const image = document.createElement("img");
image.src = odinImage;
document.body.appendChild(image);


const todosContainer = document.querySelector(".showTodosContainer");




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



