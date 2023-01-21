import { form, toDoInput, toDoList } from './varibles.js';

export const getStorage = () => {
  const storage = localStorage.getItem('ToDo') === null
    ? []
    : JSON.parse(localStorage.getItem('ToDo'));
  return storage;
};

export const addTodStorage = (arrToDos) => {
  const storage = localStorage.setItem('ToDo', JSON.stringify(arrToDos));
  return storage;
};

let arrToDos = getStorage();
export const displayToDo = () => {
  const displayToDo = arrToDos.map(
    (item, index) => `
      <div class="toDoItem" id="${index}" data-id="${item.index}">
      <div class="todoCont">
      <input type="checkbox" class="doneCheck" data-action="check" ${
  item.completed === true ? 'checked' : ''
}>
        <h3 class="hBtns  ${
  item.completed === true ? 'checkedText' : 'uncheckedText'
}" >${item.description}</h3>
        </div>
        <div class="optBtns">
        <button class="optionsBtn" >&#8942; </button>
        <div class="optDel">
       <button class="deleteBtn " data-action="delete">🗑️</button>
       <button class="closeBtn"  >❌</button>
       </div>
       </div>
    </div>
          `,
  );
  toDoList.innerHTML = displayToDo.join(' ');
};

const saveTodo = () => {
  let idItem = arrToDos.length;

  arrToDos.push({
    index: idItem,
    description: toDoInput.value,
    completed: false,
  });
  idItem += 1;
  addTodStorage(arrToDos);
};

form.addEventListener('change', (e) => {
  e.preventDefault();
  saveTodo();
  displayToDo();
});

export const checkedTodoS = () => {
  const checkBtn = document.querySelectorAll('.doneCheck');
  checkBtn.forEach((thisBtn) => {
    thisBtn.addEventListener('change', (e) => {
      e.preventDefault();
      const todoId = Number(thisBtn.closest('.toDoItem').dataset.id);
      if (thisBtn.checked) {
        arrToDos[todoId].completed = true;
        addTodStorage(arrToDos);
      } else if (!thisBtn.checked) {
        arrToDos[todoId].completed = false;
        addTodStorage(arrToDos);
      }
      displayToDo();
      window.location.reload();
    });
  });
};

export const deleteBtnTodoS = () => {
  const deleteBtn = document.querySelectorAll('.deleteBtn');
  deleteBtn.forEach((thisBtn) => {
    thisBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const todoId = Number(thisBtn.closest('.toDoItem').dataset.id);
      thisBtn.closest('.toDoItem').remove();
      arrToDos = arrToDos.filter((todo, index) => index !== todoId);
      arrToDos.forEach((element, index) => {
        element.index = index;
        displayToDo();
      });
      addTodStorage(arrToDos);
      window.location.reload();
    });
  });
};

export const clearAllBtn = () => {
  document.querySelector('.clearAllBtn').addEventListener('click', (e) => {
    e.preventDefault();
    arrToDos = arrToDos.filter((todo) => todo.completed !== true);
    arrToDos.forEach((element, index) => {
      element.index = index;
      displayToDo();
    });
    addTodStorage(arrToDos);
    window.location.reload();
  });
};
