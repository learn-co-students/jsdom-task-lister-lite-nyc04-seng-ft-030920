document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let theFormWeAreWorkingWith = evt.target;
    let input = theFormWeAreWorkingWith["new-task-description"]
    let str = input.value
    console.log(`${str}`)
    createTask(str)
  })

  function createTask(task) {
    let todos = document.querySelector("ul#tasks")
    let blankLi = document.createElement("li")
    blankLi.innerText = task
    let button = document.createElement("button")
    button.innerText = "x"
    blankLi.append(button)
    todos.append(blankLi)
    createSub(blankLi)
    button.addEventListener("click", () => {
      blankLi.remove()
    })
  }

  // function createSub(Li){
  //   let subButton = document.createElement("button")
  //   subButton.innerText = "↓"
  //   Li.append(subButton)
  //   subButton.addEventListener("click", () =>{


  //   }
  //   )
  }
});