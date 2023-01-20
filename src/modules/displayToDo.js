import arrToDos from "./arrToDos.js";
import optionsBtn from "./buttons/optionsBtn.js";
import closeBtn from "./buttons/closeBtn.js";
import doneCheck from "./buttons/checkedBtn.js";
// import uncheckedBtn from "./buttons/uncheckedBtn.js";
import deleteBtn from "./buttons/deleteBtn.js";

const displayToDo = () => {
  const toDoList = document.querySelector(".toDoList");
  const displayToDo = arrToDos.map(
    (item) => `
    <div class="toDoItem" data-id="${item.index}">
    <div class="todoCont">
    <input type="checkbox" id="doneCheck">
      <h3>${item.description}</h3>
      </div>
      <div class="optBtns">
      <button class="optionsBtn">&#8942; </button>
      <div class="optDel">
     <button class="deleteBtn " >🗑️</button>
     <button class="closeBtn " >❌</button>
     </div>
     </div>
   
    
    
  </div>
        `
  );

  toDoList.innerHTML = displayToDo.join(" ");

  optionsBtn();
  closeBtn();
  // checkedBtn();
  // uncheckedBtn();
  doneCheck();
  deleteBtn();
};

export default displayToDo;
