import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
    id, title, completed, update,
}) => (
        <li
            className={completed ? 'completed' : ''}
        >
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={completed}
                    onChange={() => update('UPDATE', id)}
                />
                <label>{title}</label>
                <button
                    className="destroy"
                    onClick={() => update('DELETE', id)}
                />
            </div>
            <input type="text" className="edit" value={title} />
        </li>
);

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    update: PropTypes.func.isRequired,
};

export default Todo;
