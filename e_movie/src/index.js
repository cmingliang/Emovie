import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js'
import * as serviceWorker from './serviceWorker';
import Container from './Container.js';

ReactDOM.render(
    <React.Fragment>
        <Header/>
        <Container/>
    </React.Fragment>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
