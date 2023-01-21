import './style.css';

import {
  displayToDo,
  checkedTodoS,
  deleteBtnTodoS,
  clearAllBtn,
} from './modules/diplayAll.js';
import { optionsBtn, closeBtn } from './modules/actionBtn.js';

window.addEventListener('DOMContentLoaded', () => {
  displayToDo();
  checkedTodoS();
  optionsBtn();
  deleteBtnTodoS();
  closeBtn();
  clearAllBtn();
});
