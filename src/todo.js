const displayToDos = [];

function toDoObj(title, description) {
  return {
    title,
    description,
    completed: false,
  };
}

const newToDo = () => {
  let title = document.getElementById("form-title").value;
  let description = document.getElementById("form-note").value;

  toDoObj(title, description);
  return { title, description };
};

export { toDoObj, newToDo, displayToDos };
