document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  const taskDescription = document.querySelector("#new-task-description")
  const taskList = document.getElementById("tasks")

  // another way of pulling this list =>
  // let list = document.querySelector("div#list ul")

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const task = document.createElement("li")
    task.innerText = taskDescription.value

    taskList.append(task)

    event.target.reset()
    }
  )
});

  // submitButton.addEventListener("submit", (event) => {
  //   event.preventDefault()

  //   let form = event.target
  //   let newInput = form["new-task-description"]
  //   let string = newInput.value

  //   let task = document.createElement("li")
  //   task.innerText = string
  //   list.append(task)

  //   // reset clears the inputs of a form
  //   event.target.reset()
  // })
