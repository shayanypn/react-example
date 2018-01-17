import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory'

render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));
