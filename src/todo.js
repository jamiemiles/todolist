const createToDo = (title, description, dueDate, urgency) => {
  const listOfToDos = [];

  return {
    title,
    description,
    dueDate,
    urgency,
  };
};

// let test = createToDo("test", "testing 1 2 3", "tomo", "urgent");
// console.log(test);

export { createToDo };
