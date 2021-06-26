import Todo from "./utilities.js";
import {saveLS, cleanLS, getLS} from './ls.js';

(function () {
  showtoDoLists();
})(window);

var toDoList = getLS("toDoLists")

var closed = document.querySelector(".close");
if (closed === null) { 
} else {
  closed.addEventListener("click", closeFunc);
}

function closeFunc(ev) {
  console.log(ev.target.id);
  let itemIndex ;
  var todoList = getLS("toDoLists")
    todoList.forEach(objectItem => {
        if (String(objectItem.id) == ev.target.id) {
            itemIndex = todoList.indexOf(objectItem)
        }
    });
    todoList.splice(itemIndex, 1)
    console.log(todoList);
    cleanLS();
    saveLS("toDoLists", todoList);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener("click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }

    console.log('tot', toDoList)

    const newState = toDoList.map((obj) =>
    parseInt(obj.id) === parseInt(ev.target.id) ? { ...obj, completed: true } : obj
    );
    console.log(typeof ev.target.id)
    console.log(newState)
    cleanLS();
    saveLS("toDoLists", newState);
  },
  false
);

function showtoDoLists() {
  var toDoList = getLS("toDoLists")
  document.getElementById("myUL").innerHTML = "";
  document.getElementById("details").innerHTML = toDoList.length + " tasks";
  genericDisplay(toDoList);
}
document.querySelector(".showtoDoLists").addEventListener("click", showtoDoLists);

function saveTodo(toDoList) {
  var toDoList = getLS("toDoLists")
  var inputValue = new Todo(document.getElementById("todoItem").value);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    toDoList.push(inputValue);
    saveLS("toDoLists", toDoList);
    showtoDoLists();
  }
  document.getElementById("todoItem").value = "";
}
document.querySelector(".addBtn").addEventListener("click", saveTodo);


function showCompleted() {
  var toDoList = getLS("toDoLists")
  let completedList = [];
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].completed === true) completedList.push(toDoList[i]);
  }
  document.getElementById("myUL").innerHTML = "";
  document.getElementById("details").innerHTML = completedList.length + " tasks completed";

  genericDisplay(completedList);
}
document.querySelector(".showCompleted").addEventListener("click", showCompleted);



function showActive() {
  var toDoList = getLS("toDoLists")
  document.getElementById("myUL").innerHTML = "";

  let completedList = [];
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].completed === false) completedList.push(toDoList[i]);
  }
  document.getElementById("details").innerHTML =
    completedList.length + " tasks left";
  genericDisplay(completedList);
}
document.querySelector(".showActive").addEventListener("click", showActive);

function genericDisplay(toDoList) {
  for (let i = 0; i < toDoList.length; i++) {
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    let sub = document.createElement("sub");
    var button = document.createElement("button");
    let p = document.createElement("p");
    h2.textContent = toDoList[i].content;
    sub.textContent = toDoList[i].id;

    if (toDoList[i].completed === true) {
      li.setAttribute("class", "checked");
    }
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    button.setAttribute("id", toDoList[i].id);
    li.appendChild(h2);
    li.appendChild(sub);
    li.appendChild(button);
    li.setAttribute("id", toDoList[i].id);
    document.getElementById("myUL").appendChild(li);
  }
}
