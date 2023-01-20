import ToDos from "./ToDos.js";
import getStorage from "./getStorage.js";
import addTodStorage from "./addTodStorage.js";
import arrToDos from "./arrToDos.js";
import displayToDo from "./displayToDo.js";
import updateIndex from "./updateIndex.js";

const addTodoInput = () => {
  const form = document.querySelector("#form");
  const toDoInput = document.querySelector("#toDoInput");
  form.addEventListener("change", (e) => {
    let id = arrToDos.length;
    e.preventDefault();
    const ToDoItem = new ToDos(id, toDoInput.value, false);
    id += 1;

    arrToDos.push(ToDoItem);
    addTodStorage(arrToDos);

    displayToDo(ToDoItem);

    console.log(arrToDos);
  });
};
export default addTodoInput;
