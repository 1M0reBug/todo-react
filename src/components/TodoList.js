import React from 'react';

import Todo from './Todo';
import TodosModel from '../models/TodosModel';
import TodoService from '../services/TodoService';

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: new TodosModel(),
            todoService: new TodoService(),
        };

        this.update = this.update.bind(this);
    }

    componentWillMount() {
        this.state.todoService.getAll()
            .then((todos) => {
                this.setState({ todos });
            });
    }

    markTodo(id) {
        const todo = this.state.todos.get(id);
        return this.state.todoService.toggle(todo)
            .then(todos => this.setState({ todos }));
    }

    deleteTodo(id) {
        const todo = this.state.todos.get(id);
        return this.state.todoService.delete(todo)
            .then(todos => this.setState({ todos }));
    }

    update(action, id) {
        if (action !== 'UPDATE' &&
            action !== 'DELETE') {
            throw new Error(`${action} is not a valid action`);
        }

        switch (action) {
        case 'UPDATE':
        default:
            this.markTodo(id);
            break;
        case 'DELETE':
            this.deleteTodo(id);
            break;
        }
    }

    render() {
        return (
            <ul className="todo-list">
                {this.state.todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        update={this.update}
                    />
                ))}
            </ul>
        );
    }
}

export default TodoList;
