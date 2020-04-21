document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskForm = document.querySelector("#create-task-form")
  let taskListUl = document.querySelector("ul#tasks")
  newTaskForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let theTaskStr = evt.target["new-task-description"].value
    let blankLi = document.createElement("li")
    blankLi.innerText = theTaskStr
    taskListUl.append(blankLi)

    blankLi.addEventListener("click", () => {
      blankLi.remove()
    })
  })





});
