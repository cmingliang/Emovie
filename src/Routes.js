import React from 'react';
import {Router,Route,browserHistory} from 'react-router-dom';
import Selling from './Selling.js';
import Showing from './Showing.js';
import Willshow from './Willshow.js';
import Movielist from './MovieList.js';

const Routes=()=>(
    <Router history={browserHistory}>
        <Route path='/' component={Movielist}>
            <Route path='selling' component={Selling}/>
            <Route path='showing' component={Showing}/>
            <Route path='willshow' component={Willshow}/>      
        </Route>
    </Router>
);

export default Routes;