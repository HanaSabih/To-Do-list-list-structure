import "./style.css";

import addTodoInput from "./modules/addTodoInput.js";
import displayToDo from "./modules/displayToDo.js";
import deleteBtn from "./modules/buttons/deleteBtn.js";
import updateIndex from "./modules/updateIndex.js";
import doneCheck from "./modules/buttons/checkedBtn.js";
addTodoInput();

window.addEventListener("DOMContentLoaded", () => {
  updateIndex();
  displayToDo();
  deleteBtn();
  doneCheck();
});
