import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
    id, title, done, update,
}) => (
        <li
            className={done ? 'completed' : ''}
        >
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={done}
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
    done: PropTypes.bool.isRequired,
    update: PropTypes.func.isRequired,
};

export default Todo;
