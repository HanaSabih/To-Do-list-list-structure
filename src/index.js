import './style.css';

const toDoList = document.querySelector('.toDoList');

// array
const arrToDos = [
  {
    index: 1,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'complete to do list project',
    completed: false,
  },
];

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
displayToDo();
window.addEventListener('DOMContentLoaded', () => {
  displayToDo();
});
