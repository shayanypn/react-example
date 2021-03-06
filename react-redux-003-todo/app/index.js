import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App';
import configureStore from './store/configureStore';
import './styles/app.scss';

const store = configureStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);