import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';

import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';

import App from './container/App';
import './styles/app.scss';

const history = createHistory();
const middleware = routerMiddleware(history);


const store = configureStore({
	todos:[{
      text: 'Task 1',
      time: (new Date()).getTime(),
      completed: false
    },{
      text: 'Task 2',
      time: (new Date()).getTime(),
      completed: false
    }]
});

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
	document.getElementById('root')
);