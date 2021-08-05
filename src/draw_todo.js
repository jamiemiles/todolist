import { displayToDos, toDoObj } from "./todo";

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

const drawTask = () => {
  const main = document.getElementById("main");
  const taskContainer = document.querySelector(".task-container");
  const section = document.createElement("section");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const circleIcon = document.createElement("i");
  const crossIcon = document.createElement("i");
  const downArrow = document.createElement("i");
  const formTitle = document.getElementById("form-title").value;
  const formNote = document.getElementById("form-note").value;

  section.setAttribute("id", "task");
  section.setAttribute("data-attribute", `${displayToDos.length}`);
  h4.setAttribute("id", "task-title");
  p.setAttribute("id", "task-note");
  circleIcon.classList.add("far");
  circleIcon.classList.add("fa-circle");
  downArrow.classList.add("fas");
  downArrow.classList.add("fa-arrow-down");
  crossIcon.classList.add("fas");
  crossIcon.classList.add("fa-times");

  h4.textContent = formTitle;
  p.textContent = formNote;

  section.append(circleIcon, h4, p, downArrow, crossIcon);
  taskContainer.append(section);
};

const displayTask = () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const formWrapper = document.querySelector(".form-wrapper");

  addTaskBtn.addEventListener("click", (e) => {
    const formTitle = document.getElementById("form-title").value;
    const formNote = document.getElementById("form-note").value;
    const taskTitle = document.getElementById("task-title");
    const taskNote = document.getElementById("task-note");
    formWrapper.classList.remove("active");

    const newTask = toDoObj(formTitle, formNote);

    displayToDos.push(newTask);
    drawTask();
  });
};

export { drawToDoForm, setFormActive, displayTask, drawTask };
