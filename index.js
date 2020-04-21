let form = document.getElementById("create-task-form")
let inputUser = form["user"]
let inputDescription = form["new-task-description"]
let inputDate = form["date"]
let taskUl = document.getElementById("tasks")
let button = document.createElement("button");

let item = document.getElementById("items");

button.innerText = 'x';



item.addEventListener('click' , (e) => {

e.preventDefault();
taskUl.style.color = e.target.value

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addInput(inputUser , inputDescription, inputDate);
    form.reset();


    

})



function addInput(inpUser , inpDes , inpDate) {
    let newTask = document.createElement("li");
   
    newTask.innerText = ` User : ${inpUser.value} ,  Description:  ${inpDes.value} ,  Date: ${inpDate.value}`;
    newTask.append(button);
    taskUl.append(newTask);


  

    button.addEventListener("click", () => {
        newTask.remove();
    })
}



