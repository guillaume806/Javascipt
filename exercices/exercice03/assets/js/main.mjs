
import Todo from './Todo.js';

const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const description = document.getElementById('todo-description').value;
    const deadline = document.getElementById('todo-deadline').value;

    if (description && deadline) {
        const todo = new Todo(description, deadline);
        addTodoToDOM(todo);
    }
});

function addTodoToDOM(todo) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${todo.description} ${todo.deadline}</span>
        <button class="remove-button">Supprimer</button>
    `;
    todoList.appendChild(li);

    const removeButton = li.querySelector('.remove-button');
    removeButton.addEventListener('click', function () {
        if (confirm('supprimer la todo?')) {
            todoList.removeChild(li);
        }
    });
}
