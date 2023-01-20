import arrToDos from "./arrToDos.js";
import addTodStorage from "./addTodStorage.js";

const updateIndex = () => {
  arrToDos.forEach((element, index) => {
    element.index = index;
  });
  addTodStorage(arrToDos);
};

export default updateIndex;
