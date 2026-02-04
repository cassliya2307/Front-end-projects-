
let taskses = [];
const taskList = document.querySelector('#inner-list ul');
// console.log(taskList);
const addBook = document.querySelector('.todo-container form');
// console.log(addBook);

let searchBook = document.querySelector('#inner-list input');

  addBook.addEventListener("submit", (event) => {
    event.preventDefault();
   const inputValue = addBook.querySelector("input").value.trim();
   console.log(inputValue);
    if(inputValue!=="") {
      taskses.push(inputValue);
    const li = document.createElement("li");
    const deleteBtn = document.createElement("span");
    const checkbox = document.createElement("input");
    deleteBtn.textContent = "❌";
       checkbox.type = "checkbox"
    const firstTitle = document.createElement("span");
    li.appendChild(firstTitle);
    li.prepend(checkbox);
    li.appendChild(deleteBtn);
    saveTasks();
    deleteBtn.style.cursor = "pointer";
    
    deleteBtn.classList.add("delete-btn");
    checkbox.classList.add("checkbox");
    
    
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });
    taskList.appendChild(li);
    firstTitle.textContent = inputValue;
    

    }

    else{
       alert("Oga you dey craze 🤬😡");
    }
    });


    searchBook.addEventListener("keyup", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const tasks = taskList.getElementsByTagName("li");
        Array.from(tasks).forEach((task) => {
            const taskText = task.textContent.toLowerCase();
            if (taskText.includes(searchTerm)) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            } 
        });
    });
    
    function saveTasks(){
      localStorage.setItem('tasks', JSON.stringify(taskses));
    }