export default class TodosModel {
    /**
     * @param {Array<Todo>} todos the initial array of todos
     */
    constructor(todos = []) {
        this.todos = todos;
    }

    sort() {
        return this.todos.sort((a, b) => a.compare(b));
    }

    add(todo) {
        this.todos = this.sort(
            this.todos.concat([todo]),
        );
        return this;
    }

    /**
     * @param {number} id
     * @return {Todo}
     */
    get(id) {
        return this.todos.filter(todo => todo.id === id)[0];
    }

    map(cb) {
        return this.todos.map(cb);
    }
}
