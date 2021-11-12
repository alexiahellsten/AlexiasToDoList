window.onload = function () {
  handleClick();
  };
  
  class TaskItem {
    constructor(task, completed) {
        this.task = task;
        this.completed = completed; 
    }
}

  function handleClick() {
    let addBtn = document.getElementById("addToList");
    addBtn.addEventListener("click", appendToList);
    addToLocalStorage();
  } 
  
  function appendToList() {
    let inputText = inputField.value.trim();
    if (inputField.value.length == 0) {
      alert("You have to write something!");
    } else {
      let toDoList = document.getElementById("toDoList");
      var li = document.createElement("li");
      toDoList.appendChild(li);
      li.innerHTML = inputField.value + " " + `<i class="bi bi-check2"></i>`;
      inputField.value = "";
      li.addEventListener("dblclick", function () {
      toDoList.removeChild(li);
  
    });
  }
  }