import './style.css';

import {
  displayToDo,
  checkedTodoS,
  deleteBtnTodoS,
  clearAllBtn,
  onEnterInput,
  editBtnTodoS,
} from './modules/diplayAll.js';
import { optionsBtn, closeBtn } from './modules/actionBtn.js';

window.addEventListener('DOMContentLoaded', () => {
  displayToDo();
  onEnterInput();
  checkedTodoS();
  optionsBtn();
  deleteBtnTodoS();
  closeBtn();
  clearAllBtn();
  editBtnTodoS();
});
