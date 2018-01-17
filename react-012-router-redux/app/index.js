import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory'


import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';
const history = createHistory();
const middleware = routerMiddleware(history);


const store = configureStore({
	models:[{text: 'Task 1'},{text: 'Task 2',}]
});


render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));
