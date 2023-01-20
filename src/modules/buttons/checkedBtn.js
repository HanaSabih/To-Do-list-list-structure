import addTodStorage from "../addTodStorage.js";
import arrToDos from "../arrToDos.js";
import getStorage from "../getStorage.js";

// const checkedBtn = () => {
//   const checkedBtn = document.querySelectorAll(".checkedBtn");
//   checkedBtn.forEach((thisBtn) => {
//     thisBtn.addEventListener("click", (e) => {
//       e.preventDefault();

//       thisBtn.style.display = "none";
//       const hChild = thisBtn.nextElementSibling;
//       hChild.style.textDecoration = "none";
//       const uncheckedBtn = thisBtn.previousElementSibling;
//       uncheckedBtn.style.display = "block";
//     });
//   });
// };

// export default checkedBtn;
const doneCheck = () => {
  const doneCheck = document.querySelectorAll("#doneCheck");
  // const ToDo = getStorage();
  doneCheck.forEach((thisBtn) => {
    thisBtn.addEventListener("change", (e) => {
      e.preventDefault();
      const todoId = thisBtn.parentElement.parentElement.dataset.id;

      let checkedStatus;
      const hChild = thisBtn.nextElementSibling;
      if (thisBtn.checked == true) {
        hChild.style.textDecoration = "line-through";
        // checkboxTask.classList.add('checked');
        // update the items in the todo-list
        alert(todoId);
        const newar = arrToDos.map((obj) => {
          if (todoId === obj.index) {
            return { ...obj, completed: true };
          }
          return obj;
        });
        addTodStorage(arrToDos);
        window.location.reload();
      } else {
        hChild.style.textDecoration = "none";
        const newarray = arrToDos.map((item) => {
          if (todoId === item.index) {
            return { ...item, completed: false };
          }
          return item;
        });
        addTodStorage(arrToDos);
        window.location.reload();
      }
    });
  });
};

export default doneCheck;
