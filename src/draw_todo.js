import { newToDo } from "./todo";

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
    // hides tasks already created.
  });
};

const drawTask = () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const formWrapper = document.querySelector(".form-wrapper");
  const task = document.getElementById("task");
  addTaskBtn.addEventListener("click", () => {
    formWrapper.classList.remove("active");
    // not sure how this works?
    task.classList.remove("disabled");
    newToDo();
  });
};

export { drawToDoForm, setFormActive, drawTask };
