clearAllBtn

const clearAllBtn = () => {
    const clearAllBtn = document.querySelectorAll(".clearAllBtn");
  
    clearAllBtn.forEach((myelem) => {
      myelem.addEventListener("click", (e) => {
        e.preventDefault();
        const todoId = e.target.dataset.id;
  
        myelem.parentElement.parentElement.parentElement.remove();
        let arr = arrToDos.filter((item) => item.index !== +todoId);
  
        addTodStorage(arr);
        location.reload();
      });
    });
  };
  
  export default clearAllBtn;