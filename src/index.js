document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newForm = e.target
    let input = newForm['new-task-description']
    let str = input.value
    console.log(`${str}`)
    createTask(str)
    form.reset()
  })
  function createTask(task){
      let newLi = document.createElement('li')
      let taskUl = document.getElementById('tasks')
      newLi.innerHTML = task
      taskUl.appendChild(newLi)
  }
});