import React from 'react';

import 'todomvc-app-css/index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => (
    <section className="todoapp">
        <Header />
        <Main />
        <Footer />
    </section>
);

export default App;
