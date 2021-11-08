window.onload = function() {
    //Alla funktioner som ska starta när sidan laddas ska in här
addItemsToList();

};

function addItemsToList() {
    let addBtn = document.getElementById("addToList");
    addBtn.addEventListener("click", handleClick);
}

  //Ändrar texten inuti knappen
  function handleClick() {
    let toDoList = document.getElementById("toDoList");
    let li = document.createElement('li');
    toDoList.appendChild(li);
    li.innerText = inputField.value; 
    inputField.value = "";
  }