import { newToDo, displayToDos } from "./todo";

const drawToDoForm = () => {
  const main = document.getElementById("main");
  const formWrapper = document.createElement("div");
  const formTitle = document.createElement("input");
  const formDescription = document.createElement("input");
  const formDueDate = document.createElement("input");
  const addTaskBtn = document.createElement("button");
  const deleteTaskBtn = document.createElement("button");

  formWrapper.classList.add("form-wrapper");
  formTitle.setAttribute("id", "form-title");
  formDescription.setAttribute("id", "form-note");
  formDueDate.setAttribute("id", "form-date");
  addTaskBtn.setAttribute("id", "add-task-btn");
  deleteTaskBtn.setAttribute("id", "delete-task-btn");

  formTitle.placeholder = "Title";
  formDescription.placeholder = "Quick Note:";
  formDueDate.type = "date";
  addTaskBtn.textContent = "Add";
  deleteTaskBtn.textContent = "Delete";

  formWrapper.append(
    formTitle,
    formDueDate,
    formDescription,
    addTaskBtn,
    deleteTaskBtn
  );
  main.append(formWrapper);

  return main;
};

const setFormActive = () => {
  const addTaskIcon = document.getElementById("plus-icon");
  const formWrapper = document.querySelector(".form-wrapper");

  addTaskIcon.addEventListener("click", () => {
    formWrapper.classList.toggle("active");
  });
};

const drawTask = (newTask) => {
  const main = document.getElementById("main");
  const section = document.createElement("section");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const circleIcon = document.createElement("i");
  const crossIcon = document.createElement("i");
  const downArrow = document.createElement("i");
  const taskTitle = document.getElementById("task-title");
  const taskDescription = document.querySelector(".description");

  taskTitle.textContent = newTask.title;
  taskDescription.textContent = newTsak.description;
  section.setAttribute("id", "task");
  section.classList.add("disabled");

  h4.setAttribute("id", "task-title");
  p.classList.add("description");
  circleIcon.classList.add("far");
  circleIcon.classList.add("fa-circle");
  downArrow.classList.add("fas");
  downArrow.classList.add("fa-arrow-down");

  crossIcon.classList.add("fas");
  crossIcon.classList.add("fa-times");

  section.append(circleIcon, h4, p, downArrow, crossIcon);
  main.append(section);
};

const callDrawing = () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const formWrapper = document.querySelector(".form-wrapper");
  const section = document.getElementById("task");
  addTaskBtn.addEventListener("click", (e) => {
    section.setAttribute("data-attribute", `${displayToDos.length}`);
    formWrapper.classList.remove("active");
    task.classList.remove("disabled");
    // e.preventDefault();
    const newTask = newToDo();
    displayToDos.push(newTask);
    drawTask(newTask);
  });
};

export { drawToDoForm, setFormActive, callDrawing, drawTask };
