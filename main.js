// Selectors
const body = document.querySelector("body");
const toggle = document.getElementById("toggle"); // button to change
const addValue = document.getElementById("add-to-do"); // input for list
const addButton = document.getElementById("add-list"); // button for list
const filterValue = document.getElementById("filter-to-do"); // input to filter
const clearButton = document.getElementById("clear-list"); //button to clear
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const toDoUL = document.getElementById("todo-list"); // ul tag

// addEventListeners
addButton.addEventListener("click", add);
toDoUL.addEventListener("click", checkDelete);
filterValue.addEventListener("keyup", filter);
clearButton.addEventListener("click", clear);

// anonymous function to change from theme to another
toggle.onclick = () => {
  toggle.classList.toggle("night");
  body.classList.toggle("night");
  sun.classList.toggle("hidden");
  if (body.classList.contains("night") && moon.classList.contains("hidden")) {
    moon.classList.remove("hidden");
  } else {
    moon.classList.add("hidden");
  }
};

// function to add and create list
function add(event) {
  // stop auto refresh after click
  event.preventDefault();
  if (addValue.value === "") {
    alert("Please Add A Task");
  } else {
    // create div to contain lists
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item-div");
    toDoUL.appendChild(itemDiv);
    // create li
    const liList = document.createElement("li");
    liList.classList.add("li-list");
    liList.textContent = addValue.value;
    itemDiv.appendChild(liList);
    // create check button
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    itemDiv.appendChild(checkButton);
    // create trash/ delete button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    itemDiv.appendChild(trashButton);
    // clean input
    addValue.value = "";
  }
}

// function to checked or completed the todo list
function checkDelete(event) {
  event.preventDefault();
  const todo = event.target;
  const parent = todo.parentElement;
  if (todo.classList[0] === "check-button") {
    parent.classList.toggle("completed");
  } else if (todo.classList[0] === "trash-button") {
    let conf = confirm("Are You Sure");
    conf === true ? parent.remove() : parent;
  }
}

// filter function
function filter(event) {
  const innerText = event.target.value.toLowerCase();
  const tasks = document.querySelectorAll(".item-div");
  tasks.forEach(function (task) {
    const item = task.firstChild.textContent;
    item.toLowerCase().indexOf(innerText)
      ? (task.style.display = "none")
      : (task.style.display = "flex");
  });
}

// clear function
function clear(e) {
  e.preventDefault();
  toDoUL.innerHTML = "";
}
