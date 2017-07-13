export default class TodoModel {
    constructor({
        id, title, completed, userId,
    }) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.userId = userId;
    }

    /**
     * Compare 2 todos
     * @param {TodoModel} todo
     */
    compare(todo) {
        return todo.id - this.id;
    }
}
