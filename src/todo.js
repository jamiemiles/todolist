const displayToDos = [];

function toDoObj(title, description) {
  return {
    title,
    description,
    completed: false,
  };
}

export { toDoObj, displayToDos };
