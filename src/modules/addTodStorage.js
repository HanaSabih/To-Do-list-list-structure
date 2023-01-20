import getStorage from "./getStorage.js";

const addTodStorage = (arrToDos) => {
  const storage = localStorage.setItem("ToDo", JSON.stringify(arrToDos));
  return storage;
};
export default addTodStorage;
