import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducers'
import { Router, browserHistory } from 'react-router';

var ReactDOM = require('react-dom');
var routes = require('./config/routes');

let store = createStore(appReducer)
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
)