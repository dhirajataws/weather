import React from 'react'
import Main from '../components/Main';
import Home from '../components/Home';

var Router = require('react-router');
var Route = Router.Router;
var IndexRoute = Router.IndexRoute;

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component ={Home}/>
    </Route>
);
