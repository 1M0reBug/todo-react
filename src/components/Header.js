import React from 'react';

const update = (e) => {
    console.log(e.target.value);
};

const Header = () => (
    <header className="header">
        <h1>todos</h1>
        <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={update}
            autoFocus
        />
    </header>
);

export default Header;
