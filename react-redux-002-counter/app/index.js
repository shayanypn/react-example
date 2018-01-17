import React, { Component } from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux';

import Counter from './components/Counter';
import reducer from './reducers'
import './styles/app.scss';

const store = createStore(reducer)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
};

render(<App />, document.getElementById('root'));
