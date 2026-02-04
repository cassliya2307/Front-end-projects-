
const taskList = document.querySelector('#inner-list ul');
console.log(taskList);
const addTask = document.querySelector('.todo-container #add-task');
console.log(addTask);

  addTask.addEventListener("submit", (event) => {
    event.preventDefault();
   const inputValue = addTask.querySelector("input").value.trim();
   console.log(inputValue);
    if(inputValue){
    const li = document.createElement("li");
    const firstTitle = document.createElement("span");
    li.appendChild(firstTitle);
    taskList.appendChild(li);
    firstTitle.textContent = inputValue;
    

    }
    });