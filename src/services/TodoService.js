import qs from '../Utils';
import TodoModel from '../models/TodoModel';
import TodosModel from '../models/TodosModel';

export default class TodoService {
    constructor(url = 'http://localhost:3001/todos') {
        this.url = url;
    }

    /**
     * @return {ModelTodos}
     */
    getAll() {
        return fetch(qs(this.url, { _limit: 10 }))
                .then(res => res.json())
                .then(todos => new TodosModel(todos));
    }

    /**
     * fetch a specific todo from its id
     * @param {number} todo
     * @return {Todo} the fetched todo
     */
    getById(id) {
        return fetch(`${this.url}/${id}`)
                .then(res => res.json())
                .then(todo => new TodoModel(todo));
    }

    /**
     * toggle the completed attribute of the todo
     * @param {Todo} todo
     * @return {Array<Todo>} all the todos
     */
    toggle(todo) {
        return fetch(`${this.url}/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({ completed: !todo.completed }),
        })
        .then(() => this.getAll());
    }

    /**
     * edit a todo title
     * @param {Todo} todo the todo representing the change
     * @return {Array<Todo>} the new global state
     */
    edit(todo) {
        return fetch(`${this.url}/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({ title: todo.title }),
        })
        .then(() => this.getAll());
    }

    /**
     * Delete a todo and return the new state
     * @param {Todo} todo the todo to delete
     * @return {Array<Todo>}
     */
    delete(todo) {
        return fetch(`${this.url}/${todo.id}`, {
            method: 'DELETE',
        })
        .then(() => this.getAll());
    }
}
