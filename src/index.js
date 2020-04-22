document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  // identifies the entire form

  const taskDescription = document.querySelector("#new-task-description")
  // identifies just the input field

  const taskList = document.getElementById("tasks")
  // identifies the list of tasks

  // another way of pulling this list =>
  // const taskList = document.querySelector("div#list ul")

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    // prevents the page from reloading when the user hits "submit"

    const task = document.createElement("li")
    // create a new "li" element for the user's new task

    task.innerText = taskDescription.value
    // insert the user's input in the field as the new task's value

    taskList.append(task)
    // associate the child "li" element to the parent "ul"

    event.target.reset()
    // clears the form input field
    }
  )
});