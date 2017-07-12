import React from 'react';

import Todo from './Todo';

const sortTodos = todos => todos.sort((a, b) => a.id > b.id);

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            url: 'http://localhost:3001/todos',
        };

        this.update = this.update.bind(this);
    }

    componentWillMount() {
        fetch(this.state.url)
            .then(res => res.json())
            .then((todos) => {
                this.setState({ todos });
            });
    }

    markTodo(id) {
        const todo = this.state.todos.filter(t => t.id === id)[0];
        return fetch(`${this.state.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ done: !todo.done }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(() => fetch(this.state.url))
        .then(res => res.json())
        .then(todos => this.setState({ todos }));
    }

    deleteTodo(id) {
        return fetch(`${this.state.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ deleted: true }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(() => fetch(this.state.url))
        .then(res => res.json())
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
                {sortTodos(this.state.todos).map(todo => (
                    (!todo.deleted)
                    ? <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        done={todo.done}
                        update={this.update}
                    />
                    : null
                ))}
            </ul>
        );
    }
}

export default TodoList;
