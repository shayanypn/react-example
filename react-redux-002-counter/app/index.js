import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import Counter from './components/Counter';
import reducer from './reducers'
import './styles/app.scss';

const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    number={store.getState()}
    onIncrease={() => store.dispatch({ type: 'INCREASE' })}
    onDecrease={() => store.dispatch({ type: 'DECREASE' })}
  />,
  rootEl
)

render()
store.subscribe(render)
