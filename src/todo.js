import { drawToDoForm } from "./draw_todo";

function toDoObj(title, description) {
  return {
    title,
    description,
  };
}

const newToDo = () => {
  let title = document.getElementById("form-title").value;
  let description = document.getElementById("form-note").value;
  const taskTitle = document.getElementById("task-title");
  taskTitle.textContent = title;

  toDoObj(title, description);
};

export { toDoObj, newToDo };
