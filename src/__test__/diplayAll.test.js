/**
 * @jest-environment jsdom
 */

import { saveTodo, displayToDo } from '../modules/diplayAll.js';

describe('add to List , all has to be completed false and starts with index 0', () => {
  test("add a task 'Task1' to local storage and check if it exists on local storage", () => {
    // Arrange
    localStorage.clear();
    // Act
    saveTodo('hana');
    // Assert
    expect(localStorage.getItem('ToDo')).toBe(
      JSON.stringify([{ index: 0, description: 'hana', completed: false }]),
    );
  });
  test("add a task 'Task2' to local storage and check if it exists on local storage", () => {
    // Act
    saveTodo('salim');
    // Assert
    expect(localStorage.getItem('ToDo')).toContain(
      JSON.stringify({ index: 1, description: 'salim', completed: false }),
    );
  });
  test("add a task 'Task3' to local storage and check if it exists on local storage", () => {
    // Act
    saveTodo('hayat');
    // Assert
    expect(localStorage.getItem('ToDo')).toContain(
      JSON.stringify({ index: 2, description: 'hayat', completed: false }),
    );
  });
});

describe('Test add to DOM function', () => {
  test('Adding 3 li element to ul', () => {
    // Arrange
    document.body.innerHTML = "<ul class='toDoList'></ul>";
    displayToDo();
    // Act
    const items = document.querySelectorAll('li');
    // Assert
    expect(items).toHaveLength(3);
  });
});
