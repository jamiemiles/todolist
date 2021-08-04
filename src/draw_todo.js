const drawToDoForm = () => {
  const main = document.getElementById("main");
  const formWrapper = document.createElement("div");
  const taskTitle = document.createElement("input");
  const taskDescription = document.createElement("input");
  const taskDueDate = document.createElement("input");
  const addTaskBtn = document.createElement("button");
  const deleteTaskBtn = document.createElement("button");

  formWrapper.classList.add("form-wrapper");
  taskTitle.setAttribute("id", "task-title");
  taskDescription.setAttribute("id", "task-note");
  taskDueDate.setAttribute("id", "task-date");
  addTaskBtn.setAttribute("id", "add-task-btn");
  deleteTaskBtn.setAttribute("id", "delete-task-btn");

  taskTitle.placeholder = "Title";
  taskDescription.placeholder = "Quick Note:";
  taskDueDate.type = "date";
  addTaskBtn.textContent = "Add";
  deleteTaskBtn.textContent = "Delete";

  formWrapper.append(
    taskTitle,
    taskDueDate,
    taskDescription,
    addTaskBtn,
    deleteTaskBtn
  );
  main.append(formWrapper);

  drawTask(taskTitle.textContent, taskDescription.textContent);

  return main;
};

const setFormActive = () => {
  const addTaskIcon = document.getElementById("plus-icon");
  addTaskIcon.addEventListener("click", () => {
    document.querySelector(".form-wrapper").classList.toggle("active");
  });
};

const drawTask = () => {
  document.getElementById("add-task-btn").addEventListener("click", () => {
    document.querySelector(".form-wrapper").classList.remove("active");
  });
};

export { drawToDoForm, setFormActive, drawTask };
