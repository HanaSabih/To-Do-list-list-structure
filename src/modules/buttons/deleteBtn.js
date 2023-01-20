import addTodStorage from "../addTodStorage.js";
import arrToDos from "../arrToDos.js";
import updateIndex from "../updateIndex.js";
import displayToDo from "../displayToDo.js";
const deleteBtn = () => {
  const deleteBtn = document.querySelectorAll(".deleteBtn");

  deleteBtn.forEach((thisBtn) => {
    thisBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // const todoId = e.target.dataset.id;
      const todoId = thisBtn.closest(".toDoItem").dataset.id;

      // note*********************************
      // thisBtn.parentElement.parentElement.parentElement.dataset.id;
      thisBtn.parentElement.parentElement.parentElement.remove();
      let arr = arrToDos.filter((item) => item.index !== +todoId);

      addTodStorage(arr);
      window.location.reload();
    });
  });
};

export default deleteBtn;
