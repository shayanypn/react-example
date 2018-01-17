import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App';
import configureStore from './store/configureStore';
import './styles/app.scss';

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
		<App />
	</Provider>,
	document.getElementById('root')
);