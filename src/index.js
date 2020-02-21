document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const toDoList = new ToDoList(); // initialized the toDoList class. (empty)

  //"$()" shorthand for "document.getElementById" <- Thanks Tyler.
  function $(x) {return document.getElementById(x);}

  // grab ul position
  const listedUl = $("tasks")

  //render the listed items in ul.
  const renderList = () => (listedUl.innerHTML = toDoList.renderTasks())

  //grab from form
  const newTaskForm = $("create-task-form")
  const newDescription = $("new-task-description")

  //add input to form array
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoList.createNewTask(newDescription.value);
    e.target.reset();
    renderList();
  })

  //delete stuff.
  listedUl.addEventListener("click", (e) => {
    if (e.target.textContent === "X") {
      toDoList.deleteTask(e.target.dataset.description);
      renderList();
    }
  })
});
