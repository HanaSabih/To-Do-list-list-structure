import './style.css';
// import bootstrap from "bootstrap";

const toDoInput = document.querySelector('#toDoInput');
const toDoList = document.querySelector('.toDoList');
const form = document.querySelector('.form');
// storage
const addTodStorage = (arrToDos) => {
  const storage = localStorage.setItem('ToDo', JSON.stringify(arrToDos));
  return storage;
};

const getStorage = () => {
  const storage = localStorage.getItem('ToDo') === null
    ? []
    : JSON.parse(localStorage.getItem('ToDo'));
  return storage;
};

// array
const arrToDos = getStorage();

class ToDos {
  constructor(index = 0, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}

let id = arrToDos.length;

const displayToDo = () => {
  const displayToDo = arrToDos.map(
    (item) => `
    <div class="toDoItem">
    <div class="todoCont">
    <button class="todoUnchecked">&#9744; </button>
       <button class="todoChecked"> &#9989; </button>
      <h3>${item.description}</h3>
      </div>
      <button class="todoOptions">&#8942; </button>
     <button class="todoDelete " data-id="${item.id}">🗑️</button>
    
    
  </div>
        `,
  );
  toDoList.innerHTML = displayToDo.join(' ');
};

window.addEventListener('DOMContentLoaded', () => {
  displayToDo();
});

form.addEventListener('change', (e) => {
  e.preventDefault();
  const ToDoItem = new ToDos(id, toDoInput.value, false);
  id += 1;

  arrToDos.push(ToDoItem);
  displayToDo();
  addTodStorage(arrToDos);
  console.log(arrToDos);
});
