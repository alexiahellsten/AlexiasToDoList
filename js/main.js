const tasklist = [];

class Task {
  constructor(task) {
    this.task = task;
    this.completed = false;
  }
}

let task1 = new Task("Drink some coffee");
let task2 = new Task("Pet the cat");
let task3 = new Task("Write some code");
tasklist.push(task1, task2, task3);

let inputForm = document.getElementById("inputForm");
inputForm.addEventListener("submit", createTask);

let inputField = document.getElementById("inputField");
let incompleteTasks = document.getElementById("toDoList");
let completedTask = document.getElementById("toDoList-completed");

function createTask(e) {
  let newTask = new Task();
  newTask.task = inputField.value.trim();
  if (inputField.value.length == 0) {
    alert("You have to write something!");
  }
  else {
    tasklist.push(newTask);
    inputField.value = "";
    appendToList();
    e.preventDefault();
  }
}

function appendToList() {

  for (let i = 0; i < tasklist.length; i++) {

    let currentTask = tasklist[i];
    let li = document.createElement("li");
    let label = document.createElement("label");
    let completedButton = document.createElement("input");
    let removeButton = document.createElement("button");
    label.innerHTML += currentTask.task + "";

    completedButton.type = "checkbox";
    completedButton.className = "completedButton";
    removeButton.type = "checkbox";
    removeButton.innerText = "x";
    removeButton.className = "removeButton";
    
    completedButton.addEventListener("click", isCompleted);
    removeButton.addEventListener("click", removeTask);
    
    if (completedButton.checked) {
      currentTask.completed;
    }

    if (currentTask.completed) {
      completedTask.appendChild(li);
    } 

     else {
      incompleteTasks.appendChild(li);
    }
    
    li.appendChild(label);
    li.appendChild(completedButton);
    li.appendChild(removeButton);
  }
}

function removeTask(){
  let li = this.parentNode;
  let ul = li.parentNode;
  ul.removeChild(li);
}

let isCompleted = function(){
  let li = this.parentNode;
  completedTask.appendChild(li);
}
