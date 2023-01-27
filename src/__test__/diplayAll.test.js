/**
 * @jest-environment jsdom
 */

import {
  saveTodo,
  deleteOneItem,
  displayToDo,
  checkedItems,
  uncheckedItems,
  clearAllCompleted,
  editOneItem,
} from "../modules/diplayAll.js";

describe("add to List , all has to be completed false and starts with index 0", () => {
  test("add a task 'Task1' to local storage and check if it exists on local storage", () => {
    // Arrange
    localStorage.clear();
    // Act
    saveTodo("hana");
    // Assert
    expect(localStorage.getItem("ToDo")).toBe(
      JSON.stringify([{ index: 0, description: "hana", completed: false }])
    );
  });
  test("add a task 'Task2' to local storage and check if it exists on local storage", () => {
    // Act
    saveTodo("salim");
    // Assert
    expect(localStorage.getItem("ToDo")).toContain(
      JSON.stringify({ index: 1, description: "salim", completed: false })
    );
  });
  test("add a task 'Task3' to local storage and check if it exists on local storage", () => {
    // Act
    saveTodo("hayat");
    // Assert
    expect(localStorage.getItem("ToDo")).toContain(
      JSON.stringify({ index: 2, description: "hayat", completed: false })
    );
  });
});

describe("Test add to DOM function", () => {
  test("Adding 3 li element to ul", () => {
    // Arrange
    document.body.innerHTML = "<ul class='toDoList'></ul>";
    displayToDo();
    // Act
    const items = document.querySelectorAll("li");
    // Assert
    expect(items).toHaveLength(3);
  });
});

describe("Remove one item from list", () => {
  test("remove the task2 from the list and check if it's length is equal to 2 and if the index is updated", () => {
    // Arrange
    const id = 1;

    // Act
    deleteOneItem(id);
    // Assert
    expect(localStorage.getItem("ToDo")).toBe(
      '[{"index":0,"description":"hana","completed":false},{"index":1,"description":"hayat","completed":false}]'
    );
  });
});

describe("Test after removing from localStorage remove from  DOM function", () => {
  test("remove 1 li element to ul", () => {
    // Arrange
    document.body.innerHTML = "<ul class='toDoList'></ul>";
    displayToDo();
    // Act
    const items = document.querySelectorAll("li");
    // Assert
    expect(items).toHaveLength(2);
  });
});

describe("update checked completed status", () => {
  test("checked and change the completed status of task index 0 from false to true and check if it changes on local storage", () => {
    // Act
    checkedItems(0);

    // Assert
    expect(localStorage.getItem("ToDo")).toContain(
      JSON.stringify({ index: 0, description: "hana", completed: true })
    );
  });
  test("checked and change the completed status of task index 1 from false to true and check if it changes on local storage", () => {
    // Act
    checkedItems(1);

    // Assert
    expect(localStorage.getItem("ToDo")).toContain(
      JSON.stringify({ index: 1, description: "hayat", completed: true })
    );
  });
});

describe("update unchecked completed status after being checked", () => {
  test("unchecked and change the completed status of task index 1 from true to false and check if it changes on local storage", () => {
    // Act
    uncheckedItems(1);

    // Assert
    expect(localStorage.getItem("ToDo")).toContain(
      JSON.stringify({ index: 1, description: "hayat", completed: false })
    );
  });
});

describe("clear completed", () => {
  test("should remove from the list on the local storage  the task of index 0 where it is true and it  should just  keep in the localstorage  and update the index of other task where it is false", () => {
    // Act
    clearAllCompleted();

    // Assert
    expect(localStorage.getItem("ToDo")).toBe(
      JSON.stringify([{ index: 0, description: "hayat", completed: false }])
    );
  });
});

describe("edit a task description", () => {
  test('edit the description of a task  task index 0 from "hayat" to "edited" and check if it changes in localstorage', () => {
    // Act
    editOneItem("edited", 0);

    // Assert
    expect(localStorage.getItem("ToDo")).toContain(
      JSON.stringify({ index: 0, description: "edited", completed: false })
    );
  });
});
