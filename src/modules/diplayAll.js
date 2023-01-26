import { form, toDoInput } from './varibles.js';

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
let EditId = -1;
export const displayToDo = () => {
  const toDoList = document.querySelector('.toDoList');
  const displayToDo = arrToDos.map(
    (item, index) => `
  <li class="toDoItem" id="${index}" data-id="${item.index}">
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
    <button class="editBtn " data-action="edit">🖋️</button>
   <button class="deleteBtn " data-action="delete">🗑️</button>
   <button class="closeBtn"  >❌</button>
   </div>
   </div>
</li>
      `,
  );
  toDoList.innerHTML = displayToDo.join(' ');
};

export const editOneItem = (newDesc, id) => {
  arrToDos = arrToDos.map((todo, index) => {
    todo.description = index === id ? newDesc : todo.description;
    addTodStorage(arrToDos);
    return arrToDos;
  });
  id = -1;
};

export const saveTodo = (desc) => {
  let idItem = arrToDos.length;
  if (EditId >= 0) {
    editOneItem(desc, EditId);
  } else {
    arrToDos.push({
      index: idItem,
      description: desc,
      completed: false,
    });
    idItem += 1;
    addTodStorage(arrToDos);
  }
};

export const onEnterInput = () => {
  form.addEventListener('change', (e) => {
    e.preventDefault();
    saveTodo(toDoInput.value);
    displayToDo();
  });
};

export const checkedItems = (idc) => {
  arrToDos[idc].completed = true;
  addTodStorage(arrToDos);
};

export const uncheckedItems = (iduc) => {
  arrToDos[iduc].completed = false;
  addTodStorage(arrToDos);
};

export const checkedTodoS = () => {
  const checkBtn = document.querySelectorAll('.doneCheck');
  checkBtn.forEach((thisBtn) => {
    thisBtn.addEventListener('change', (e) => {
      e.preventDefault();
      const todoId = Number(thisBtn.closest('.toDoItem').dataset.id);
      if (thisBtn.checked) {
        checkedItems(todoId);
      } else if (!thisBtn.checked) {
        uncheckedItems(todoId);
      }
      displayToDo();
      window.location.reload();
    });
  });
};

export const changeIndexArr = (arr) => {
  arr.forEach((element, index) => {
    element.index = index;
    displayToDo();
  });
  addTodStorage(arr);
  window.location.reload();
};

export const editBtnTodoS = () => {
  const deleteBtn = document.querySelectorAll('.editBtn');
  deleteBtn.forEach((thisBtn) => {
    thisBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const todoId = Number(thisBtn.closest('.toDoItem').dataset.id);
      toDoInput.value = arrToDos[todoId].description;
      EditId = todoId;
    });
  });
};

export const deleteOneItem = (id) => {
  arrToDos = arrToDos.filter((todo, index) => index !== id);
  changeIndexArr(arrToDos);
};

export const deleteBtnTodoS = () => {
  const deleteBtn = document.querySelectorAll('.deleteBtn');
  deleteBtn.forEach((thisBtn) => {
    thisBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const todoId = Number(thisBtn.closest('.toDoItem').dataset.id);
      thisBtn.closest('.toDoItem').remove();
      deleteOneItem(todoId);
    });
  });
};

export const clearAllCompleted = () => {
  arrToDos = arrToDos.filter((todo) => todo.completed !== true);
  changeIndexArr(arrToDos);
};

export const clearAllBtn = () => {
  document.querySelector('.clearAllBtn').addEventListener('click', (e) => {
    e.preventDefault();
    clearAllCompleted();
  });
};
