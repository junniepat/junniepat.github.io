import Todo from "./utilities.js"

(function() {
  showtoDoLists();
})(window);

var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");

var closed = document.querySelector('.close');
if(closed === null) {
}
else {
  closed.addEventListener('click', closeFunc);
}

function closeFunc(ev) {
  console.log(ev.target.id)
  var index = toDoList.findIndex(function(item){
    return item.id === ev.target.id;
  })
  const removedItem = toDoList.splice(index, 1);
console.log('hbb', toDoList);
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }

  const newState = toDoList.map(obj =>
    obj.id === ev.target.id ? { ...obj, completed: true } : obj
  );
  localStorage.clear();
  localStorage.setItem("toDoLists", JSON.stringify(newState));
}, false);

function showtoDoLists() {
  var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");
    document.getElementById('myUL').innerHTML = "";
    document.getElementById('details').innerHTML = toDoList.length + " tasks"
    genericDisplay(toDoList);
}
document.querySelector('.showtoDoLists').addEventListener('click', showtoDoLists);


function saveTodo(toDoList) {
  var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");
  var inputValue = new Todo(document.getElementById("todoItem").value);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    toDoList.push(inputValue);
    localStorage.setItem("toDoLists", JSON.stringify(toDoList));

    showtoDoLists()
  }

  document.getElementById("todoItem").value = "";
}
document.querySelector('.addBtn').addEventListener('click', saveTodo);



function showCompleted() {
  var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");
  let completedList = [];
  for(let i = 0; i < toDoList.length; i++) {
      if(toDoList[i].completed === true)
      completedList.push(toDoList[i])
  }
  
  document.getElementById('myUL').innerHTML = "";
  document.getElementById('details').innerHTML = completedList.length + " tasks completed"

  genericDisplay(completedList)
}
document.querySelector('.showCompleted').addEventListener('click', showCompleted);



function showActive() {
  var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");
  document.getElementById('myUL').innerHTML = "";

  let completedList = [];
  for(let i = 0; i < toDoList.length; i++) {
      if(toDoList[i].completed === false)
      completedList.push(toDoList[i])
  }
  document.getElementById('details').innerHTML = completedList.length + " tasks left"
  genericDisplay(completedList)

}
document.querySelector('.showActive').addEventListener('click', showActive);



function genericDisplay(toDoList){
  for (let i = 0; i < toDoList.length; i++ ) {
    let li = document.createElement("li");
    let h2 = document.createElement('h2');
    let sub =document.createElement('sub');
    var button = document.createElement("button");
    let p = document.createElement('p');

    h2.textContent = toDoList[i].content
    sub.textContent = toDoList[i].id.toLocaleString();

    if(toDoList[i].completed === true) {
        li.setAttribute('class', 'checked')
    }

    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    button.setAttribute('id', toDoList[i].id)

    li.appendChild(h2);
    li.appendChild(sub)
    li.appendChild(button)
    li.setAttribute('id', toDoList[i].id)
    

    document.getElementById('myUL').appendChild(li);
}
}

